import BookCard from '../../components/BookCard'
import type { Book, ReadingStatus } from '../../types'
import { sortBooksByTitle } from './bookUtils'

interface BookListProps {
  books: Book[]
  // eslint-disable-next-line no-unused-vars
  onStatusChange: (bookId: string, status: ReadingStatus) => void
  // eslint-disable-next-line no-unused-vars
  onAddNote: (bookId: string, noteText: string) => void
  // eslint-disable-next-line no-unused-vars
  onEditBook: (book: Book) => void
  // eslint-disable-next-line no-unused-vars
  onDeleteBook: (book: Book) => void
}

export default function BookList({
  books,
  onStatusChange,
  onAddNote,
  onEditBook,
  onDeleteBook,
}: BookListProps) {
	const sortedBooks = sortBooksByTitle(books)

  if (sortedBooks.length === 0) {
    return (
      <section
        className="card book-list-empty"
        aria-label="Book list empty state"
      >
        <p className="eyebrow">Book list</p>
        <h2>No titles match this view</h2>
        <p>Try changing your filter options or add a new book to get started.</p>
      </section>
    )
  }

  return (
    <section className="book-list" aria-label="Book list">
      {sortedBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onStatusChange={onStatusChange}
          onAddNote={onAddNote}
          onEditBook={onEditBook}
          onDeleteBook={onDeleteBook}
        />
      ))}
    </section>
  )
}
