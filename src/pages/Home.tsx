import BookList from '../features/books/BookList'
import type { Book } from '../types'

const books: Book[] = [
  { id: '1', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', status: 'finished' },
  { id: '2', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', status: 'reading' },
  { id: '3', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', status: 'to-read' },
  { id: '4', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming', status: 'finished' },
]

export default function Home() {
  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <BookList books={books} />
    </main>
  )
}