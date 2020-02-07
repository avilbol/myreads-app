import React, { Component } from 'react'

import BookShelf from './BookShelf'

/**
 * Component that represents the main page (books categorized)
 */
class MainPage extends Component {

    booksData = []

    shelves = [
        { "key": "currentlyReading", "name": "Currently reading" },
        { "key": "wantToRead", "name": "Want to read" },
        { "key": "read", "name": "Read" }
    ]

    render = () => (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.shelves.map((shelf) => (
                    <BookShelf 
                        {...this.booksData[shelf.key]}
                        shelfName={shelf.name}
                        onBookSwitchShelf={this.props.onBookSwitchShelf} />))}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
    )

    componentDidMount() {
        const { books, shelfState } = this.props
        shelves.map(shelf => {
            let categoryBooks = books.filter(book => book.shelf === shelf)
            let categoryShelfState = {}
            categoryBooks
                .map(categoryBook => categoryBook.id)
                .forEach(id => { 
                    categoryShelfState[`${id}-shelf`] = shelfState[`${id}-shelf`]
                })
            this.booksData[shelf] = {
                "books": categoryBooks,
                "shelfState": categoryShelfState
            }
        })
    }

}

export default MainPage;