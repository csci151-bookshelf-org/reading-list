export type ReadingStatus = 'to-read' | 'reading' | 'finished'

export interface Note {
	id: string
	text: string
	createdAt: string | Date
}

export interface Book {
	id: string
	title: string
	author: string
	genre: string
	status: ReadingStatus
	notes?: Note[]
}

export interface FilterState {
	query: string
	status: ReadingStatus | 'all'
}
