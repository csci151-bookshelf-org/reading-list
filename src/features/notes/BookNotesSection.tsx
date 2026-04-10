import type { Note } from '../../types'
import AddNoteForm from './AddNoteForm'
import NoteItem from './NoteItem'

interface BookNotesSectionProps {
	notes?: Note[]
	onAddNote: (noteText: string) => void
}

export default function BookNotesSection({ notes, onAddNote }: BookNotesSectionProps) {
	const safeNotes = notes ?? []

	return (
		<section className="space-y-4">
			<h3 className="text-sm font-semibold uppercase tracking-wide text-slate-600">
				Reading Notes
			</h3>

			<AddNoteForm onAddNote={onAddNote} />

			<div className="space-y-3">
				{safeNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
		</section>
	)
}