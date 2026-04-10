import type { Book } from '../types'
import { formatReadingStatus } from '../features/books/bookUtils'

interface BookCardProps {
	book: Book
}

export default function BookCard({ book }: BookCardProps) {
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
		</article>
	)
}
