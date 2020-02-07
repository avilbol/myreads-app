import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'

class MyReadsApp extends Component {

    state = {
        "books": []
    }

    render = () => (
        <Router>
            <ReadsMainPage 
                books={this.state.books}
            />
            <ReadsSearchPage 
                books={this.state.books}
            />
        </Router>
    )
}