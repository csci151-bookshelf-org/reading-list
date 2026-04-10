export type ReadingStatus = "to-read" | "reading" | "finished";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  status: ReadingStatus;
  notes?: string;
}

export interface FilterState {
	query: string
	status: ReadingStatus | 'all'
}
