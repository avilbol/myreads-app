import React, { Component } from 'react'

/**
 * Represents the UI generated from a books state and props
 */
class BookDetail extends Component {

    handleShelfChange = (e, book) => {
        e.preventDefault()
        book.shelf = e.target.value
        this.props.onBookShelfSwitch({"id": book.id}, book.shelf)
    }

    render() {
        const { book } = this.props
        const thumbnail = (book.imageLinks && book.imageLinks.thumbnail)
            ? book.imageLinks.thumbnail 
            : './images/image-not-found.png';
        return (
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 188, 
                            backgroundImage: `url(${thumbnail})`
                        }}
                    ></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf || "none"} onChange={e => this.handleShelfChange(e, book)}>
                            <option value="" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{
                    book.authors ? book.authors.join(", ") : "No Authors"}</div>
            </div>
        )
    }

}

export default BookDetail;