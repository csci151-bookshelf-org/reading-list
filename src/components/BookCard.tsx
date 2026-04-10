import type { Book } from '../types'
import { formatReadingStatus } from '../features/books/bookUtils'
import BookNotesSection from '../features/notes/BookNotesSection'

interface BookCardProps {
	book: Book
	onAddNote: (bookId: string, noteText: string) => void
}

export default function BookCard({ book, onAddNote }: BookCardProps) {
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

			<BookNotesSection notes={book.notes} onAddNote={(noteText) => onAddNote(book.id, noteText)} />
		</article>
	)
}
