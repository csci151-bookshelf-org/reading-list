import React from 'react'
import AddBook from './AddBook'
import type { Book } from '../../types'

interface AddBookModalProps {
  isOpen: boolean
  onClose: () => void
  onAddBook: (book: Book) => void
}

export default function AddBookModal({ isOpen, onClose, onAddBook }: AddBookModalProps) {
  if (!isOpen) return null

  return (
    <div className="modal-backdrop">
      <div
        className="modal-card w-full max-w-md"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center pb-4 border-b border-white/8 mb-4">
          <h2 className="text-xl font-semibold text-white">Add a New Book</h2>
          <button
            onClick={onClose}
            className="ghost-button p-0 w-10 h-10 flex items-center justify-center"
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

        <div>
          <AddBook onAddBook={onAddBook} onCancel={onClose} />
        </div>
      </div>
    </div>
  )
}