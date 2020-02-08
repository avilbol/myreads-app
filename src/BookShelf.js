import React from 'react'

import BookList from './BookList'

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