import BookList from '../features/books/BookList'
import { useBooks } from '../features/books/useBooks'

export default function Home() {
  const { books, handleStatusChange } = useBooks()

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <BookList books={books} onStatusChange={handleStatusChange} />
    </main>
  )
}