import React from 'react'

import BookDetail from './BookDetail'

/**
 * Component to draw a list of books, with an empty message fallback
 */
const BookList = ({ books, emptyMessage, onBookShelfSwitch}) => (
    <>
    {books.length === 0 && (<p>{emptyMessage}</p>)}
    {books.length > 0 && (
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <BookDetail 
                        book={book}
                        onBookShelfSwitch={onBookShelfSwitch}/>
                </li>
            ))}
        </ol>)}
    </>
)

export default BookList;