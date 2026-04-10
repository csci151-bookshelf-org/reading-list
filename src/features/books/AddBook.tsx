import React, { useState } from 'react'
import type { Book, ReadingStatus } from './BookTypes'

interface AddBookProps {
  // eslint-disable-next-line no-unused-vars
  onAddBook: (book: Book) => void
  onCancel: () => void
}

export default function AddBook({ onAddBook, onCancel }: AddBookProps) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [genre, setGenre] = useState('')
  const [status, setStatus] = useState<ReadingStatus>('to-read')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim() || !author.trim()) return

    const newBook: Book = {
      id: crypto.randomUUID(),
      title: title.trim(),
      author: author.trim(),
      genre: genre.trim(),
      status,
    }

    onAddBook(newBook)

    // Reset state
    setTitle('')
    setAuthor('')
    setGenre('')
    setStatus('to-read')
  }

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Title <span className="required-mark">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-input"
          placeholder="Enter book title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author" className="form-label">
          Author <span className="required-mark">*</span>
        </label>
        <input
          id="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="text-input"
          placeholder="Enter author name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <input
          id="genre"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="text-input"
          placeholder="Enter book genre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="status" className="form-label">
          Reading Status
        </label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as ReadingStatus)}
          className="text-input"
        >
          <option value="to-read">To Read</option>
          <option value="reading">Currently Reading</option>
          <option value="finished">Finished</option>
        </select>
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={onCancel}
          className="ghost-button"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="primary-button"
          disabled={!title.trim() || !author.trim()}
        >
          Add Book
        </button>
      </div>
    </form>
  )
}