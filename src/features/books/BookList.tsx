import BookCard from '../../components/BookCard'
import type { Book } from '../../types'
import { sortBooksByTitle } from './bookUtils'

interface BookListProps {
	books: Book[]
}

export default function BookList({ books }: BookListProps) {
	const sortedBooks = sortBooksByTitle(books)

	if (sortedBooks.length === 0) {
		return (
			<section className="card book-list-empty" aria-label="Book list empty state">
				<p className="eyebrow">Book list</p>
				<h2>No books yet</h2>
				<p>The collection is empty right now.</p>
			</section>
		)
	}

	return (
		<section className="book-list" aria-label="Book list">
			{sortedBooks.map((book) => (
				<BookCard key={book.id} book={book} />
			))}
		</section>
	)
}
