export type ReadingStatus = 'to-read' | 'reading' | 'finished'

export interface Book {
  id: string
  title: string
  author: string
  status: ReadingStatus
  notes: string
  rating: number
}

export interface BookDraft {
  title: string
  author: string
  status: ReadingStatus
  notes: string
  rating: number
}

export interface FilterState {
  query: string
  status: ReadingStatus | 'all'
}