import React from 'react'

import BookList from './BookList'

/**
 * This component represents the panel for a shelf detail data, including the
 * shelf name and books in that shelf
 */
const BookShelf = ({ name, books, onBookShelfSwitch }) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
            <BookList 
                books={books}
                onBookShelfSwitch={onBookShelfSwitch}
                emptyMessage="There is no books here"
            />
        </div>
    </div>
)

export default BookShelf