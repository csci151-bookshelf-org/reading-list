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
		<article className="rounded-lg bg-slate-100 px-4 py-3 text-slate-800">
			<p className="text-sm leading-6">{note.text}</p>
			<p className="mt-2 text-xs text-slate-500">{formatCreatedAt(note.createdAt)}</p>
		</article>
	)
}