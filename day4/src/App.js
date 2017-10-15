import React from 'react';
import DataStore from './DataStore';

const dataStore = new DataStore();

class App extends React.Component {
    constructor() {
        super();
        this.state = { _books: [], bookId: 1, title: 'Title', author: 'Author', newTitle: 'Title', newAuthor: 'Author' };
        this.store = dataStore;

        this.store.loadBooks(function (data) {
            this.setState({ _books: data });
        }.bind(this));

        this.getAllBooks = this.getAllBooks.bind(this);
        this.getBook = this.getBook.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.createBook = this.createBook.bind(this);
        this.updateBook = this.updateBook.bind(this);
        this.deleteBook = this.deleteBook.bind(this);

    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    getAllBooks(){
        
    }
    getBook(event) {
        var newTitle = false;
        for (var i = 0; i < this.state._books.length; i++) {
            if (this.state._books[i].id == this.state.bookId) {
                const title = this.state._books[i].title;
                const author = this.state._books[i].author;
                this.setState({ title: title, author: author });
                newTitle = true;
            }
        }
        if (!newTitle) {
            alert("Count find book")
        }
    }
    createBook() {
        const book = {
            "title": this.state.newTitle,
            "author": this.state.newAuthor
        };
        this.store.createBook(book, (data) => { this.setState({ _books: data }) });
    }
    updateBook() {
        const book = {
            "title": this.state.title,
            "author": this.state.author
        };
        const id = this.state.bookId;
        this.store.updateBook(book, id,(data) => { this.setState({ _books: data }) });
    }
    deleteBook(){
        const id = this.state.bookId;
        this.store.deleteBook(id, (data) => { this.setState({ _books: data }) });
    }
    render() {
       
        return (
            <div>
                <h1>Books</h1>

                <input name="bookId" type="number" value={this.state.bookId} onChange={this.handleChange} />
                <button onClick={this.getBook}>Find Book</button>
                <br></br>
                <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
                <input name="author" type="text" value={this.state.author} onChange={this.handleChange} />
                <button onClick={this.updateBook}>Update Book</button>
                <button onClick={this.deleteBook}>Delete Book</button>
                <p>Delete book does delete the book but it also crashes the application</p>
                <br>
                </br>
                <h3>All books</h3>
                {this.state._books.map(function (book) { return <p>{book.id} - {book.title} - {book.author}</p> })}
                <br>
                </br>
                <form onSubmit={this.createBook}>
                    <input name="newTitle" type="text" value={this.state.newTitle} onChange={this.handleChange} />
                    <input name="newAuthor" type="text" value={this.state.newAuthor} onChange={this.handleChange} />
                    <input type="submit" value="Create book" />
                </form>
            </div>
        )
    };
}

export default App;
