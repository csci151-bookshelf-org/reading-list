import { useId, useState, type FormEvent } from 'react'

interface AddNoteFormProps {
	// eslint-disable-next-line no-unused-vars
	onAddNote: (noteText: string) => void
}

export default function AddNoteForm({ onAddNote }: AddNoteFormProps) {
	const [noteText, setNoteText] = useState('')
	const noteFieldId = useId()
	const isSubmitDisabled = noteText.trim().length === 0

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const trimmedText = noteText.trim()

		if (!trimmedText) {
			return
		}

		onAddNote(trimmedText)
		setNoteText('')
	}

	return (
		<form className="note-form" onSubmit={handleSubmit}>
			<label htmlFor={noteFieldId} className="note-label">
				Add a note
			</label>
			<textarea
				id={noteFieldId}
				value={noteText}
				onChange={(event) => setNoteText(event.target.value)}
				rows={4}
				placeholder="Write a quick thought about this book..."
				className="note-textarea"
			/>
			<div className="note-actions">
				<button
					type="submit"
					disabled={isSubmitDisabled}
					className="ghost-button note-submit"
				>
					Save Note
				</button>
			</div>
		</form>
	)
}