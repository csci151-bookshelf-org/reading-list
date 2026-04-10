import type { Book, ReadingStatus } from '../types'
import type { ChangeEvent } from 'react'
import { formatReadingStatus } from '../features/books/bookUtils'

const statusClasses: Record<ReadingStatus, string> = {
  "to-read": "bg-sky-100 text-sky-800 border-sky-200",
  reading: "bg-amber-100 text-amber-800 border-amber-200",
  finished: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

const statusOptions: Array<{ value: ReadingStatus; label: string }> = [
  { value: "to-read", label: "Want to Read" },
  { value: "reading", label: "Reading" },
  { value: "finished", label: "Finished" },
];

interface BookCardProps {
  book: Book;
  onStatusChange: (bookId: string, status: ReadingStatus) => void;
}

export default function BookCard({ book, onStatusChange }: BookCardProps) {
  function handleChange(event: ChangeEvent<HTMLSelectElement>) {
    onStatusChange(book.id, event.target.value as ReadingStatus);
  }

  return (
    <article className="card book-card p-5 sm:p-6">
      <div className="card-header flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="eyebrow">{book.genre}</p>
          <h3>{book.title}</h3>
        </div>
        <span
          className={`status-pill inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusClasses[book.status]}`}
        >
          {formatReadingStatus(book.status)}
        </span>
      </div>

      <p className="book-meta text-sm text-slate-600">by {book.author}</p>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <label
          className="text-sm font-medium text-slate-700"
          htmlFor={`status-${book.id}`}
        >
          Reading status
        </label>
        <select
          id={`status-${book.id}`}
          value={book.status}
          onChange={handleChange}
          className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm transition duration-150 ease-in-out focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-200"
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </article>
  );
}
