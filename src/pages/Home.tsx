import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import { filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, FilterState } from '../types'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([
    { id: '1', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', status: 'finished' },
    { id: '2', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', status: 'reading' },
    { id: '3', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', status: 'to-read' },
    { id: '4', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming', status: 'finished' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

export default function Home() {
  const [filters, setFilters] = useState<FilterState>(defaultFilterState)

  const visibleBooks = useMemo(
    () => filterBooks(books, filters.query, filters.status),
    [filters],
  )

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <FilterBar value={filters} onChange={setFilters} />
      <BookList books={visibleBooks} />
    </main>
  )
}