import { useMemo, useState } from "react";
import FilterBar from "../components/FilterBar";
import BookList from "../features/books/BookList";
import { useBooks } from "../features/books/useBooks";
import { filterBooks } from "../features/books/bookUtils";
import { defaultFilterState } from "../features/filter/filterUtils";
import type { Book, FilterState } from "../types";

export default function Home() {
  const { books, handleStatusChange } = useBooks();

  const [filters, setFilters] = useState<FilterState>(defaultFilterState);

  const visibleBooks = useMemo(
    () => filterBooks(books, filters.query, filters.status),
    [books, filters],
  );

  return (
    <main className="page-shell">
      <header className="card intro-card">
        <p className="eyebrow">Reading List</p>
        <h1>Book List</h1>
        <p>A clean front-end view of the books in the collection.</p>
      </header>

      <FilterBar value={filters} onChange={setFilters} />
      <BookList books={visibleBooks} onStatusChange={handleStatusChange} />
    </main>
  );
}
