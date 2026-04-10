import type { Note } from '../../types'
import AddNoteForm from './AddNoteForm'
import NoteItem from './NoteItem'

interface BookNotesSectionProps {
	notes?: Note[]
	// eslint-disable-next-line no-unused-vars
	onAddNote: (noteText: string) => void
}

export default function BookNotesSection({ notes, onAddNote }: BookNotesSectionProps) {
	const safeNotes = notes ?? []

	return (
		<section className="notes-section">
			<h3 className="notes-title">
				Reading Notes
			</h3>

			<AddNoteForm onAddNote={onAddNote} />

			<div className="notes-list">
				{safeNotes.map((note) => (
					<NoteItem key={note.id} note={note} />
				))}
			</div>
		</section>
	)
}