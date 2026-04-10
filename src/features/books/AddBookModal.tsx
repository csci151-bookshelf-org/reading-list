import React from 'react'
import AddBook from './AddBook'
import type { Book } from '../../types'

interface AddBookModalProps {
  isOpen: boolean
  onClose: () => void
  // eslint-disable-next-line no-unused-vars
  onAddBook: (book: Book) => void
}

export default function AddBookModal({ isOpen, onClose, onAddBook }: AddBookModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop">
      <div
        className="modal-card add-book-modal"
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-header">
          <h2>Add a New Book</h2>
          <button
            type="button"
            onClick={onClose}
            className="ghost-button icon-button"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <AddBook onAddBook={onAddBook} onCancel={onClose} />
        </div>
      </div>
    </div>
  )
}