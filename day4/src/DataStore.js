import React from 'react';

const URL = 'http://localhost:4000/books';
class DataStore extends React.Component {
    constructor() {
        super(); 
        this._books = [];

        this.loadBooks = this.loadBooks.bind(this);
    }
    loadBooks(callback) {
        fetch(URL, { 
            method: 'GET' 
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            callback(data);
        });
    }
    createBook(book, callback) {
        fetch(URL, {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(book)
        }).then(function (data) {
            return data.json();
        }).then(()=>this.loadBooks(callback));
    }
    updateBook(book, id,callback) {
        fetch(URL + '/' + id, {
            method: 'PUT',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify(book)
        }).then(function (data) {
            return data.json();
        }).then(()=>this.loadBooks(callback));
    }
    deleteBook(id, callback) {
        fetch(URL + '/' + id, {
            method: 'DELETE'
        }).then(function (data) {
            return data.json();
        }).then(function (data) {
            callback(data);
        })
    }
}

export default DataStore;