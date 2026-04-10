import type { Book } from '../types'
import type { ReadingStatus } from '../types'
import type { ChangeEvent } from 'react'
import { formatReadingStatus } from '../features/books/bookUtils'
import BookNotesSection from '../features/notes/BookNotesSection'

const statusClassByValue: Record<ReadingStatus, string> = {
  'to-read': 'status-pill-to-read',
  reading: 'status-pill-reading',
  finished: 'status-pill-finished',
}

const statusOptions: Array<{ value: ReadingStatus; label: string }> = [
  { value: 'to-read', label: 'Want to Read' },
  { value: 'reading', label: 'Reading' },
  { value: 'finished', label: 'Finished' },
]

interface BookCardProps {
  book: Book
  // eslint-disable-next-line no-unused-vars
  onStatusChange: (bookId: string, status: ReadingStatus) => void
	// eslint-disable-next-line no-unused-vars
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
        <span className={`status-pill ${statusClassByValue[book.status]}`}>
          {formatReadingStatus(book.status)}
        </span>
      </div>

      <p className="book-meta">by {book.author}</p>

      <div className="status-editor">
        <label className="status-label" htmlFor={`status-${book.id}`}>
          Reading status
        </label>
        <select
          id={`status-${book.id}`}
          value={book.status}
          onChange={handleChange}
          className="text-input status-select"
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
