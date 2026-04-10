import type { Book, ReadingStatus } from '../../types'

const normalize = (value: string) => value.trim().toLowerCase()

export const filterBooks = (
	books: Book[],
	query: string,
	status: ReadingStatus | 'all',
): Book[] => {
	const normalizedQuery = normalize(query)

	return books.filter((book) => {
		const matchesStatus = status === 'all' || book.status === status
		const matchesQuery =
			normalizedQuery.length === 0 ||
			book.title.toLowerCase().includes(normalizedQuery) ||
			book.author.toLowerCase().includes(normalizedQuery)

		return matchesStatus && matchesQuery
	})
}

export const countByStatus = (books: Book[], status: ReadingStatus): number =>
	books.reduce((total, book) => (book.status === status ? total + 1 : total), 0)

export function sortBooksByTitle(books: Book[]) {
	return [...books].sort((left, right) => left.title.localeCompare(right.title))
}

export function formatReadingStatus(status: ReadingStatus) {
	return status
		.replace('-', ' ')
		.replace(/\b\w/g, (character) => character.toUpperCase())
}
