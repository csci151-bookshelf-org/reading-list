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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Add a New Book</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
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

        <div className="p-4">
          <AddBook onAddBook={onAddBook} onCancel={onClose} />
        </div>
      </div>
    </div>
  )
}