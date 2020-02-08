import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import { debounce } from 'throttle-debounce';

import { search } from './BooksAPI'

import BookList from './BookList'

/**
 * Component that represents the search page with a searh bar and the panel
 * with query results
 */
class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.handleChangeDebounced = debounce(200, this.handleChange);
    };

    state = {
        "searchText": "",
        "books": []
    };

    handleChange = e => {
        search(e.target.value).then(books => {
            if(Array.isArray(books)) {
                books.forEach(book => {
                    book.shelf = this.props.shelfState[`${book.id}-shelf`];
                });
            }
            this.setState({
                "searchText": e.target.value,
                "books": Array.isArray(books) ? books : []
            });
        });
    };

    onChange = e => {
        this.handleChangeDebounced(e);
        e.persist();
    };

    render = () => {
        const { books, searchText } = this.state;
        const { onBookShelfSwitch } = this.props;
        const { onChange } = this;
        const emptyMessage = searchText === "" ? "" : "No results found";
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to = "/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            onChange={onChange}
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <BookList books={books} onBookShelfSwitch={onBookShelfSwitch} emptyMessage={emptyMessage} />
                </div>
            </div>
        );
    }
}

export default SearchPage;
