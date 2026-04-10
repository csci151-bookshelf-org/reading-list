import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar'
import BookList from '../features/books/BookList'
import { filterBooks } from '../features/books/bookUtils'
import { defaultFilterState } from '../features/filter/filterUtils'
import type { Book, FilterState, Note } from '../types'

const initialBooks: Book[] = [
  { id: '1', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', status: 'finished' },
  { id: '2', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', status: 'reading' },
  { id: '3', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', status: 'to-read' },
  { id: '4', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming', status: 'finished' },
]

export default function Home() {
  const [books, setBooks] = useState<Book[]>(initialBooks)
  const [filters, setFilters] = useState<FilterState>(defaultFilterState)

  const visibleBooks = useMemo(
    () => filterBooks(books, filters.query, filters.status),
    [books, filters],
  )

  function handleAddNote(bookId: string, noteText: string) {
    const trimmedText = noteText.trim()

    if (!trimmedText) {
      return
    }

    const newNote: Note = {
      id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      text: trimmedText,
      createdAt: new Date().toISOString(),
    }

    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? {
              ...book,
              notes: [...(book.notes ?? []), newNote],
            }
          : book,
      ),
    )
  }

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <FilterBar value={filters} onChange={setFilters} />
      <BookList books={visibleBooks} onAddNote={handleAddNote} />
    </main>
  )
}