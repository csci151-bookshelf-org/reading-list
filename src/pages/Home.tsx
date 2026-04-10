import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import AddBookModal from '../features/books/AddBookModal'
import { useBooks } from '../features/books/useBooks'
import { filterBooks } from '../features/books/bookUtils'
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

  function handleAddBookAndClose(book: Book) {
    handleAddBook(book)
    setIsModalOpen(false)
  }

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <button onClick={() => setIsModalOpen(true)} className="primary-button mb-4">
        + Add Book
      </button>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBookAndClose}
      />

      <FilterBar value={filters} onChange={setFilters} />
      <BookList
        books={visibleBooks}
        onStatusChange={handleStatusChange}
        onAddNote={handleAddNote}
      />
    </main>
  )
}
