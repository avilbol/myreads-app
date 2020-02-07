import React from 'react'

import BookDetail from './BookDetail'

const BookShelf = ({shelfName, books, onBookSwitchShelf}) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => {
                    <li>
                        <BookDetail 
                            book={book}
                            shelf={shelfState[`${book.id}-shelf`]}
                            onBookSwitchShelf={onBookSwitchShelf}/>
                    </li>
                })}
            </ol>
        </div>
    </div>
)

export default BookShelf