import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import EditBook from '../features/books/EditBook'
import AddBookModal from '../features/books/AddBookModal'
import { filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, FilterState } from '../types'

export default function Home() {
  // We use the state name 'books' from develop to keep the team's convention
  const [books, setBooks] = useState<Book[]>([
    { id: '1', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', status: 'finished' },
    { id: '2', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', status: 'reading' },
    { id: '3', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', status: 'to-read' },
    { id: '4', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming', status: 'finished' },
  ])
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>(defaultFilterState)
  const [editingBook, setEditingBook] = useState<Book | null>(null)

  const visibleBooks = useMemo(
    () => filterBooks(books, filters.query, filters.status),
    [books, filters],
  )

  const handleAddBook = (book: Book) => {
    setBooks([...books, book])
    setIsModalOpen(false)
  }

  const handleSaveEdit = (updatedBook: Book) => {
    setBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b))
    setEditingBook(null)
  }

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      {/* Logic: If we are editing, show the Edit Form. 
          Otherwise, show the Add Button and the main List. */}
      {editingBook ? (
        <EditBook 
            book={editingBook} 
            onSave={handleSaveEdit} 
            onCancel={() => setEditingBook(null)} 
        />
      ) : (
        <>
          <button
            onClick={() => setIsModalOpen(true)}
            className="primary-button mb-4"
          >
            + Add Book
          </button>

          <AddBookModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onAddBook={handleAddBook}
          />

          <FilterBar value={filters} onChange={setFilters} />
          <BookList books={visibleBooks} onEditBook={setEditingBook} />
        </>
      )}
    </main>
  )
}