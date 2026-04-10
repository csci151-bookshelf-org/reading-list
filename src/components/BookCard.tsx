import type { Book } from '../types'
import type { ReadingStatus } from '../types'
import type { ChangeEvent } from 'react'
import { formatReadingStatus } from '../features/books/bookUtils'
import BookNotesSection from '../features/notes/BookNotesSection'

const statusOptions: Array<{ value: ReadingStatus; label: string }> = [
  { value: 'to-read', label: 'Want to Read' },
  { value: 'reading', label: 'Reading' },
  { value: 'finished', label: 'Finished' },
]

interface BookCardProps {
  book: Book
  onStatusChange: (bookId: string, status: ReadingStatus) => void
	onAddNote: (bookId: string, noteText: string) => void
}


export default function BookCard({ book, onStatusChange, onAddNote }: BookCardProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onStatusChange(book.id, event.target.value as ReadingStatus)
  }

  return (
    <article className="card book-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">{book.genre}</p>
          <h3>{book.title}</h3>
        </div>
        <span className="status-pill">{formatReadingStatus(book.status)}</span>
      </div>

      <p className="book-meta">by {book.author}</p>

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-200" htmlFor={`status-${book.id}`}>
          Reading status
        </label>
        <select
          id={`status-${book.id}`}
          value={book.status}
          onChange={handleChange}
          className="text-input"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <BookNotesSection
        notes={book.notes}
        onAddNote={(noteText) => onAddNote(book.id, noteText)}
      />
    </article>
  )
}
