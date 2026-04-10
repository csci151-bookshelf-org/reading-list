import { useMemo, useState } from 'react'
import ConfirmDialog from '../components/ConfirmDialog'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import AddBookModal from '../features/books/AddBookModal'
import EditBook from '../features/books/EditBook'
import { useBooks } from '../features/books/useBooks'
import { countByStatus, filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, FilterState } from '../types'

export default function Home() {
  const {
    books,
    handleStatusChange,
    handleAddBook,
    handleAddNote,
    handleUpdateBook,
    handleDeleteBook,
  } = useBooks()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [bookToEdit, setBookToEdit] = useState<Book | null>(null)
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null)
  const [filters, setFilters] = useState<FilterState>(defaultFilterState)

  const visibleBooks = useMemo(
    () => filterBooks(books, filters.query, filters.status),
    [books, filters],
  )

  const stats = {
    total: books.length,
    toRead: countByStatus(books, 'to-read'),
    reading: countByStatus(books, 'reading'),
    finished: countByStatus(books, 'finished'),
  }

  const hasActiveFilters = filters.query.trim().length > 0 || filters.status !== 'all'

  function resetFilters() {
    setFilters(defaultFilterState)
  }

  function handleAddBookAndClose(book: Book) {
    handleAddBook(book)
    setIsModalOpen(false)
  }

  function handleEditBook(updatedBook: Book) {
    handleUpdateBook(updatedBook)
    setBookToEdit(null)
  }

  function handleConfirmDelete() {
    if (!bookToDelete) {
      return
    }

    handleDeleteBook(bookToDelete.id)
    setBookToDelete(null)
  }

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading Desk</p>
        <h1>Build your personal reading rhythm</h1>
        <p className="hero-copy">
          Organize your shelves, update progress in seconds, and keep your best reading
          insights beside every title.
        </p>

        <section className="summary-grid" aria-label="Reading summary">
          <article className="summary-stat">
            <p className="summary-label">Total</p>
            <p className="summary-value">{stats.total}</p>
          </article>
          <article className="summary-stat">
            <p className="summary-label">To Read</p>
            <p className="summary-value">{stats.toRead}</p>
          </article>
          <article className="summary-stat">
            <p className="summary-label">Reading</p>
            <p className="summary-value">{stats.reading}</p>
          </article>
          <article className="summary-stat">
            <p className="summary-label">Finished</p>
            <p className="summary-value">{stats.finished}</p>
          </article>
        </section>
      </header>

      <section className="home-toolbar" aria-label="Primary actions">
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="primary-button add-trigger"
        >
          + Add Book
        </button>

        {hasActiveFilters ? (
          <button type="button" onClick={resetFilters} className="ghost-button">
            Reset Filters
          </button>
        ) : (
          <p className="toolbar-note">{visibleBooks.length} books on your active shelf</p>
        )}
      </section>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBookAndClose}
      />

      {bookToEdit ? (
        <div className="modal-backdrop">
          <div className="modal-card add-book-modal" role="dialog" aria-modal="true">
            <div className="modal-header">
              <h2>Edit Book</h2>
              <button
                type="button"
                onClick={() => setBookToEdit(null)}
                className="ghost-button icon-button"
                aria-label="Close edit modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div className="modal-body">
              <EditBook
                book={bookToEdit}
                onSave={handleEditBook}
                onCancel={() => setBookToEdit(null)}
              />
            </div>
          </div>
        </div>
      ) : null}

      <FilterBar
        value={filters}
        onChange={setFilters}
        resultCount={visibleBooks.length}
        totalCount={books.length}
      />
      <BookList
        books={visibleBooks}
        onStatusChange={handleStatusChange}
        onAddNote={handleAddNote}
        onEditBook={setBookToEdit}
        onDeleteBook={setBookToDelete}
      />

      <ConfirmDialog
        open={bookToDelete !== null}
        title="Delete book?"
        message={`This will remove ${bookToDelete?.title ?? 'this book'} from your reading desk.`}
        onCancel={() => setBookToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </main>
  )
}
