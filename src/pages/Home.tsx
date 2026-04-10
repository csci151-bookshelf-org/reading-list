import { useMemo, useState } from 'react'
import Navbar from '../components/Navbar'
import FilterBar from '../components/FilterBar'
import BookForm from '../components/BookForm'
import BookList from '../features/books/BookList'
import NotesModal from '../components/NotesModal'
import ConfirmDialog from '../components/ConfirmDialog'
import { useBooks } from '../hooks/useBooks'
import { countByStatus, filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, BookDraft, FilterState } from '../types'

export default function Home() {
  const { books, addBook, updateBook, deleteBook, setStatus } = useBooks()
  const [filters, setFilters] = useState<FilterState>(defaultFilterState)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [bookToDelete, setBookToDelete] = useState<Book | null>(null)
  const [editingBook, setEditingBook] = useState<Book | null>(null)

  const visibleBooks = useMemo(
    () => filterBooks(books, filters.query, filters.status),
    [books, filters],
  )

  const summary = {
    total: books.length,
    reading: countByStatus(books, 'reading'),
    finished: countByStatus(books, 'finished'),
  }

  const handleSubmit = (draft: BookDraft) => {
    if (editingBook) {
      updateBook(editingBook.id, draft)
      setEditingBook(null)
      return
    }

    addBook(draft)
  }

  return (
    <main className="page-shell">
      <Navbar bookCount={books.length} />

      <section className="summary-grid">
        <article className="card summary-card">
          <p className="eyebrow">Library</p>
          <h2>{summary.total}</h2>
          <p>Books in your collection</p>
        </article>
        <article className="card summary-card">
          <p className="eyebrow">Reading</p>
          <h2>{summary.reading}</h2>
          <p>Currently in progress</p>
        </article>
        <article className="card summary-card">
          <p className="eyebrow">Finished</p>
          <h2>{summary.finished}</h2>
          <p>Completed titles</p>
        </article>
      </section>

      <section className="content-grid">
        <div className="content-stack">
          <FilterBar value={filters} onChange={setFilters} />
          <BookList
            books={visibleBooks}
            onEdit={(book) => setEditingBook(book)}
            onDelete={(book) => setBookToDelete(book)}
            onOpenNotes={(book) => setSelectedBook(book)}
            onSetStatus={setStatus}
          />
        </div>

        <div className="content-stack">
          <BookForm
            heading={editingBook ? 'Edit book' : 'Add book'}
            submitLabel={editingBook ? 'Update book' : 'Save book'}
            initialValue={editingBook ?? undefined}
            onSubmit={handleSubmit}
            onCancel={editingBook ? () => setEditingBook(null) : undefined}
          />
        </div>
      </section>

      <NotesModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      <ConfirmDialog
        open={bookToDelete !== null}
        title="Delete book?"
        message={`This removes ${bookToDelete?.title ?? 'the selected book'} from your list.`}
        onCancel={() => setBookToDelete(null)}
        onConfirm={() => {
          if (bookToDelete) {
            deleteBook(bookToDelete.id)
          }
          setBookToDelete(null)
        }}
      />
    </main>
  )
}