import type { Note } from '../../types'

interface NoteItemProps {
	note: Note
}

function formatCreatedAt(createdAt: string | Date) {
	return new Date(createdAt).toLocaleString([], {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
	})
}

export default function NoteItem({ note }: NoteItemProps) {
	return (
		<article className="note-item">
			<p className="note-text">{note.text}</p>
			<p className="note-date">{formatCreatedAt(note.createdAt)}</p>
		</article>
	)
}