import type { Book, ReadingStatus } from '../../types'

export function sortBooksByTitle(books: Book[]) {
	return [...books].sort((left, right) => left.title.localeCompare(right.title))
}

export function formatReadingStatus(status: ReadingStatus) {
	return status
		.replace('-', ' ')
		.replace(/\b\w/g, (character) => character.toUpperCase())
}
