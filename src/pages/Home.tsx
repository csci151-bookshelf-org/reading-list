import { useState } from 'react'
import BookList from '../features/books/BookList'
import AddBookModal from '../features/books/AddBookModal'
import type { Book } from '../types'

export default function Home() {
  const [books, setBooks] = useState<Book[]>([
    { id: '1', title: 'Atomic Habits', author: 'James Clear', genre: 'Self-Help', status: 'finished' },
    { id: '2', title: 'Clean Code', author: 'Robert C. Martin', genre: 'Programming', status: 'reading' },
    { id: '3', title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction', status: 'to-read' },
    { id: '4', title: 'The Pragmatic Programmer', author: 'Andrew Hunt', genre: 'Programming', status: 'finished' },
  ])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddBook = (book: Book) => {
    setBooks([...books, book])
    setIsModalOpen(false)
  }

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        + Add Book
      </button>

      <AddBookModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddBook={handleAddBook}
      />

      <BookList books={books} />
    </main>
  )
}