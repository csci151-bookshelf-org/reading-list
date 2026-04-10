import BookCard from '../../components/BookCard'
import type { Book } from '../../types'
import { sortBooksByTitle } from './bookUtils'

interface BookListProps {
	books: Book[]
	isFiltering?: boolean
	onClearFilters?: () => void
}

export default function BookList({
	books,
	isFiltering = false,
	onClearFilters,
}: BookListProps) {
	const sortedBooks = sortBooksByTitle(books)

	if (sortedBooks.length === 0) {
		return (
			<section className="card book-list-empty" aria-label="Book list empty state">
				<p className="eyebrow">Book list</p>
				<h2>{isFiltering ? 'No matches found' : 'No books yet'}</h2>
				<p>
					{isFiltering
						? 'Try another keyword or switch to a different status.'
						: 'The collection is empty right now.'}
				</p>
				{isFiltering && onClearFilters ? (
					<button
						type="button"
						className="ghost-button empty-reset"
						onClick={onClearFilters}
					>
						Reset filters
					</button>
				) : null}
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
