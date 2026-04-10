import { useEffect, useState } from "react";
import type { Book, ReadingStatus } from "../../types";

const STORAGE_KEY = "reading-list-books";

const initialBooks: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    status: "finished",
    notes: "Focus on systems over goals.",
  },
  {
    id: "2",
    title: "Clean Code",
    author: "Robert C. Martin",
    genre: "Programming",
    status: "reading",
    notes: "Great for software craftsmanship.",
  },
  {
    id: "3",
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    status: "to-read",
  },
  {
    id: "4",
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    genre: "Programming",
    status: "finished",
    notes: "A timeless development guide.",
  },
];

function loadBooks(): Book[] {
  if (typeof window === "undefined") {
    return initialBooks;
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return initialBooks;
  }

  try {
    const parsed = JSON.parse(stored) as Book[];
    return Array.isArray(parsed) ? parsed : initialBooks;
  } catch {
    return initialBooks;
  }
}

export function useBooks() {
  const [books, setBooks] = useState<Book[]>(() => loadBooks());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  function handleStatusChange(bookId: string, newStatus: ReadingStatus) {
    setBooks((currentBooks) =>
      currentBooks.map((book) =>
        book.id === bookId ? { ...book, status: newStatus } : book,
      ),
    );
  }

  return { books, handleStatusChange };
}
