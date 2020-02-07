import React, { Component } from 'react'

import { BrowserRouter as Router} from 'react-router-dom'

import { getAll, update } from './BooksAPI'

import MainPage from './MainPage'
import SearchPage from './SearchPage'

class MyReadsApp extends Component {

    books = []

    onBookShelfSwitch = (book, shelf) => {
        update(book, shelf)
            .then(() => {
                let bookShelf = `${book.id}-shelf`
                this.setState({
                    [bookShelf]: shelf
                })
            })
    }

    render = () => (
        <Router>
            <MainPage 
                books={this.books}
                shelfState={this.state}
                onBookShelfSwitch={this.onBookShelfSwitch}
            />
            <SearchPage 
                books={this.books}
                shelfState={this.state}
                onBookShelfSwitch={this.onBookShelfSwitch}
            />
        </Router>
    )

    componentDidMount() {
        getAll().then(books => {
            this.books = books
            this.configureShelfState(this.books)
        })
    }

    configureShelfState = books => {
        let shelfState = {}
        books.forEach(book => {
            shelfState[`${book.id}-shelf`] = book.shelf
        })
        this.setState(shelfState)
    }
}

export default MyReadsApp;