import { useId, useState, type FormEvent } from 'react'

interface AddNoteFormProps {
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
		<form className="space-y-3" onSubmit={handleSubmit}>
			<label htmlFor={noteFieldId} className="block text-sm font-medium text-slate-700">
				Add a note
			</label>
			<textarea
				id={noteFieldId}
				value={noteText}
				onChange={(event) => setNoteText(event.target.value)}
				rows={4}
				placeholder="Write a quick thought about this book..."
				className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-200"
			/>
			<div>
				<button
					type="submit"
					disabled={isSubmitDisabled}
					className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
				>
					Save Note
				</button>
			</div>
		</form>
	)
}