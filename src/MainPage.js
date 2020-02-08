import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import BookShelf from './BookShelf'

/**
 * Component that represents the main page (books categorized)
 */
class MainPage extends Component {

    shelves = [
        { "key": "currentlyReading", "name": "Currently reading" },
        { "key": "wantToRead", "name": "Want to read" },
        { "key": "read", "name": "Read" }
    ]

    render = () => {
        const { books, shelfState, onBookShelfSwitch } = this.props;
        let booksByShelf = this.getBooksByShelves(books, shelfState);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.loading && (<p>Loading...</p>)}
                        {!this.props.loading && this.shelves.map((shelf) => {
                            let shelfBooks = booksByShelf[shelf.key] || []
                            return (
                                <BookShelf 
                                    key={shelf.key}
                                    name={shelf.name}
                                    books={shelfBooks}
                                    onBookShelfSwitch={onBookShelfSwitch} />)
                            }
                        )}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">
                        <button>Add a book</button>
                    </Link>
                </div>
            </div>
        )
    }

    getBooksByShelves(books, shelfState) {
        let booksByShelf = {}
        books.forEach(book => {
            let shelfKey = shelfState[`${book.id}-shelf`]
            let shelfBooks = booksByShelf[shelfKey] || [];
            shelfBooks.push(...[book]);
            booksByShelf[shelfKey] = shelfBooks;
        })
        return booksByShelf;
    }
}

export default MainPage;
