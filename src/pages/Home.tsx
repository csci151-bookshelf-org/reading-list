import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import EditBook from '../features/books/EditBook'
import { filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, FilterState } from '../types'

const INITIAL_BOOKS: Book[] = [
  { id: '1', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', status: 'finished' },
  { id: '2', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', status: 'reading' },
  { id: '3', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', status: 'to-read' },
  { id: '4', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming', status: 'finished' },
]

export default function Home() {
  const [allBooks, setAllBooks] = useState<Book[]>(INITIAL_BOOKS)
  const [filters, setFilters] = useState<FilterState>(defaultFilterState)
  const [editingBook, setEditingBook] = useState<Book | null>(null)

  const visibleBooks = useMemo(
    () => filterBooks(allBooks, filters.query, filters.status),
    [allBooks, filters], // Added allBooks to dependencies
  )

  const handleSaveEdit = (updatedBook: Book) => {
    setAllBooks(prev => prev.map(b => b.id === updatedBook.id ? updatedBook : b))
    setEditingBook(null) // Close the form
  }

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>
      
      {editingBook ? (
        <EditBook 
            book={editingBook} 
            onSave={handleSaveEdit} 
            onCancel={() => setEditingBook(null)} 
        />
      ) : (
        <>
          <FilterBar value={filters} onChange={setFilters} />
          <BookList books={visibleBooks} onEditBook={setEditingBook} />
        </>
      )}
    </main>
  )
}