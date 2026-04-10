import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import AddBookModal from '../features/books/AddBookModal'
import { useBooks } from '../features/books/useBooks'
import { countByStatus, filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, FilterState } from '../types'

export default function Home() {
  const { books, handleStatusChange, handleAddBook, handleAddNote } = useBooks()
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      />
    </main>
  )
}
