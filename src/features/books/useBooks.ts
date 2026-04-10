import { useEffect, useState } from 'react'
import type { Book, Note, ReadingStatus } from '../../types'

const STORAGE_KEY = 'reading-list-books'

const initialBooks: Book[] = [
  {
    id: '1',
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Help',
    status: 'finished',
    notes: [],
  },
  {
    id: '2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    genre: 'Programming',
    status: 'reading',
    notes: [],
  },
  {
    id: '3',
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    status: 'to-read',
    notes: [],
  },
  {
    id: '4',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    genre: 'Programming',
    status: 'finished',
    notes: [],
  },
]

function createNote(text: string): Note {
  return {
    id: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    text,
    createdAt: new Date().toISOString(),
  }
}

function normalizeNotes(notes: Book['notes']): Note[] {
  if (!notes) {
    return []
  }

  if (Array.isArray(notes)) {
    return notes
      .map((note) => {
        if (typeof note === 'string') {
          const trimmedText = note.trim()
          return trimmedText ? createNote(trimmedText) : null
        }

        if (!note || typeof note !== 'object') {
          return null
        }

        const noteRecord = note as Note

        if (
          typeof noteRecord.id !== 'string' ||
          typeof noteRecord.text !== 'string' ||
          (typeof noteRecord.createdAt !== 'string' && !(noteRecord.createdAt instanceof Date))
        ) {
          return null
        }

        return noteRecord
      })
      .filter((note): note is Note => note !== null)
  }

  return []
}

function normalizeBook(book: Book): Book {
  return {
    ...book,
    notes: normalizeNotes(book.notes),
  }
}

function loadBooks(): Book[] {
  if (typeof window === 'undefined') {
    return initialBooks
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)

  if (!stored) {
    return initialBooks
  }

  try {
    const parsed = JSON.parse(stored) as Book[]
    return Array.isArray(parsed) ? parsed.map(normalizeBook) : initialBooks
  } catch {
    return initialBooks
  }
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>(() => loadBooks())

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
  }, [books])

  function handleStatusChange(bookId: string, newStatus: ReadingStatus) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, status: newStatus } : book,
      ),
    )
  }

  function handleAddBook(book: Book) {
    setBooks((currentBooks) => [...currentBooks, normalizeBook(book)])
  }

  function handleAddNote(bookId: string, noteText: string) {
    const trimmedText = noteText.trim()

    if (!trimmedText) {
      return
    }

    const newNote = createNote(trimmedText)

    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId
          ? {
              ...book,
              notes: [...normalizeNotes(book.notes), newNote],
            }
          : book,
      ),
    )
  }

  return { books, handleStatusChange, handleAddBook, handleAddNote }
}
