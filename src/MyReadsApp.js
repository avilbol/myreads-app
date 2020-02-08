import React, { Component } from 'react'

import { 
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import { get, getAll, update } from './BooksAPI'

import MainPage from './MainPage'
import SearchPage from './SearchPage'

import './App.css'

class MyReadsApp extends Component {

    books = []

    state = {
        "loading": true
    }

    onBookShelfSwitch = (book, shelf) => {
        if(this.books.filter(
            it => it.id === book.id).length === 0) {
            get(book.id).then(book => {
                book.shelf = shelf
                this.books.push(...[book]);
                this.updateShelfState(book, shelf);
            })
        } else {
            this.updateShelfState(book, shelf);
        }
    }

    updateShelfState = (book, shelf) => {
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
            <Route exact path="/">
                <MainPage 
                    books={this.books}
                    loading={this.state.loading}
                    shelfState={this.state}
                    onBookShelfSwitch={this.onBookShelfSwitch}
                />
            </Route>
            <Route exact path="/search">
                <SearchPage 
                    books={this.books}
                    shelfState={this.state}
                    onBookShelfSwitch={this.onBookShelfSwitch}
                />
            </Route>
        </Router>
    )

    componentDidMount() {
        getAll().then(books => {
            this.books = books
            this.configureState(this.books)
        })
    }

    configureState = books => {
        let newState = {}
        books.forEach(book => {
            newState[`${book.id}-shelf`] = book.shelf
        })
        newState.loading = false
        this.setState(newState)
    }
}

export default MyReadsApp;