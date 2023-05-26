// import React from 'react'
// import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

type BookList = {
    list: {
        id: number;
        book: string;
        author: string;
        hasRead: boolean;
    }[]
}

// todo - need to grab props from the backend when sent down and have it name the books/authors
//       props: Book
const List = (props: BookList) => {

    const [books, setBooks] = useState<BookList[]>([]);

    useEffect(() => {
        fetchBooks();
    }, [props]); // Run once on component mount

    const fetchBooks = async () => {
        axios.get('http://localhost:8080/list')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => {
                console.error('Error fetching books:', error);
            });
    };

    const deleteBook = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/book/${id}`);
            // After deleting, fetch the updated list of books
            fetchBooks();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    return (
        <div>
            <p><Link to="/">Home</Link></p>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>index</th>
                        <th>#id</th>
                        <th>Book Title</th>
                        <th>Book Author</th>
                        <th>Have Read</th>
                    </tr>
                </thead>
                <tbody>
                    {props.list.map((book, index) => {
                        return (
                            <tr key={book.id}>
                                <td>{index}</td>
                                <td>{book.id}</td>
                                <td>{book.book}</td>
                                <td>{book.author}</td>
                                <td>{book.hasRead}</td>
                                <td>
                                    <button className='btn btn-primary mx-2'>View</button>
                                    <Link className='btn btn-outline-primary mx-2' to={`/editbook/${book.id}`}>Edit</Link>
                                    <button
                                        onClick={() => deleteBook(book.id)}
                                        className='btn btn-danger mx-2'>Delete
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default List;