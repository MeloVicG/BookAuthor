import { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams   } from 'react-router-dom'
import axios from 'axios'


interface Book {
    book: string;
    author: string;
    read: boolean;
}

const EditBook = () => {

    const {id}=useParams()

    const [book, setBook] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [read, setRead] = useState<boolean>(false)
    
    const navigate = useNavigate();
    
    // useEffect(() => {
    //     axios.get(`http://localhost:8080/book/${id}`)
    //         .then(res => {
    //             console.log(res.data);
    //         })
    //         .catch( err =>{
    //             console.log("we have an error during edit");
                
    //         })
    // },[id])

    const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

    const updateBook: Book = {
        book: book,
        author: author,
        read: read
    }

    axios.put(`http://localhost:8080/book/${id}`, updateBook) // TODO - have to create this route in the backend???
        .then(res => {
            console.log('axios data: ', res.data);
            setBook(res.data.book)
            setAuthor(res.data.author)
            setRead(res.data.read)
            navigate('/list')
        })
        .catch(err => {
            console.log(err);
            console.log("we have an error!!!");
        })
    }

    return (
        <div>
            <h2>EDIT BOOK</h2>
            <p><Link to="/">Home</Link></p>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <p>
                        <label htmlFor="bookName">Book Name: </label>
                        <input type="text" onChange={(e) => setBook(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="bookName">Author Name: </label>
                        <input type="text" onChange={(e) => setAuthor(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="readCheck"> have you read before? </label>
                        <input type="checkbox" onChange={e => setRead(e.target.checked)} />
                    </p>
                </div>
                <button> <h6>submit</h6> </button>
            </form>

        </div>

    )
}

export default EditBook