import React, { Component } from 'react'

class BookDetail extends Component {

    handleShelfChange = (e, book) => {
        e.preventDefault()
        book.shelf = e.target.value
        this.props.onBookShelfSwitch({"id": book.id}, book.shelf)
    }

    render() {
        const { book } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.thumbnail})`}}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={e => this.handleShelfChange(e, book)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(", ")}</div>
            </div>
        )
    }

}

export default BookDetail;