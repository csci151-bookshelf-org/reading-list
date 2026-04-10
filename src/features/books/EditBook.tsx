import { useState } from 'react';
import type { Book, ReadingStatus } from '../../types';

interface EditBookProps {
    book: Book;
    // eslint-disable-next-line no-unused-vars
    onSave: (updatedBook: Book) => void;
    onCancel: () => void;
}

export default function EditBook({ book, onSave, onCancel }: EditBookProps) {
    const [title, setTitle] = useState(book.title);
    const [author, setAuthor] = useState(book.author);
    const [genre, setGenre] = useState(book.genre);
    const [status, setStatus] = useState<ReadingStatus>(book.status);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave({
            ...book, // Preserves the original ID
            title,
            author,
            genre,
            status
        });
    };

    return (
        <section className="card" aria-label="Edit Book Form">
            <div className="card-header">
                <div>
                    <p className="eyebrow">Settings</p>
                    <h2>Edit Book</h2>
                </div>
            </div>

            {/* Using basic styles for the form to ensure it looks clean inside the card */}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
                <div>
                    <label htmlFor="title" style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 'bold' }}>Title</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label htmlFor="author" style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 'bold' }}>Author</label>
                    <input
                        id="author"
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label htmlFor="genre" style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 'bold' }}>Genre</label>
                    <input
                        id="genre"
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                </div>

                <div>
                    <label htmlFor="status" style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 'bold' }}>Status</label>
                    <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as ReadingStatus)}
                        style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                    >
                        <option value="to-read">Want to Read</option>
                        <option value="reading">Reading</option>
                        <option value="finished">Finished</option>
                    </select>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '1rem' }}>
                    <button 
                        type="button" 
                        onClick={onCancel}
                        style={{ padding: '0.5rem 1rem', background: '#f1f5f9', border: '1px solid #cbd5e1', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Cancel
                    </button>
                    <button 
                        type="submit"
                        style={{ padding: '0.5rem 1rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </section>
    );
}