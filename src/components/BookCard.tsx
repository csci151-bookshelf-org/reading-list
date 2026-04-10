import type { Book } from '../types'
import { formatReadingStatus } from '../features/books/bookUtils'

interface BookCardProps {
    book: Book
    onEdit: (book: Book) => void // Add this prop
}

export default function BookCard({ book, onEdit }: BookCardProps) {
    return (
        <article className="card book-card">
            <div className="card-header">
                <div>
                    <p className="eyebrow">{book.genre}</p>
                    <h3>{book.title}</h3>
                </div>
                <span className="status-pill">{formatReadingStatus(book.status)}</span>
            </div>

            <p className="book-meta">by {book.author}</p>
            
            {/* Added the Edit Action Button */}
            <div className="card-actions" style={{ marginTop: '1rem', textAlign: 'right' }}>
                <button 
                    onClick={() => onEdit(book)}
                    className="btn-edit" 
                    style={{ background: 'none', border: '1px solid currentColor', padding: '4px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem' }}
                >
                    Edit Details
                </button>
            </div>
        </article>
    )
}