import React from 'react'

import BookDetail from './BookDetail'

const BookShelf = (props) => {
    const {name, books, onBookShelfSwitch} = props
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <div className="bookshelf-books">
                {books.length === 0 && (<p>There is no books here</p>)}
                {books.length > 0 && (<ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <BookDetail 
                                book={book}
                                onBookShelfSwitch={onBookShelfSwitch}/>
                        </li>
                    ))}
                </ol>)}
            </div>
        </div>
    )
}

export default BookShelf