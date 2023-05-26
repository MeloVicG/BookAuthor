import { FormEvent, useState } from 'react';
import { Link, useNavigate   } from 'react-router-dom'
import axios from 'axios'


interface Book {
    title: string;
    author: string;
    read: boolean;
}

const AddBook = () => {

    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [read, setRead] = useState<boolean>(false)
    
    const navigate = useNavigate();
    
    const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

    const newBook: Book = {
        title: title,
        author: author,
        read: read
    }
    
        axios.post("http://localhost:8080/create", newBook) // TODO - have to create this route in the backend???
            .then(res => {
                console.log('axios response: ', res);
                console.log('axios data: ', res.data);
                navigate('/list')
            })
            .catch(err => {
                console.log(err);
                console.log("we have an error!!!");
            })
    }

    return (
        <div>
            AddAuthor
            <p><Link to="/">Home</Link></p>

            <form onSubmit={onSubmitHandler}>
                <div>
                    <p>
                        <label htmlFor="bookName">Book Name: </label>
                        <input type="text" onChange={(e) => setTitle(e.target.value)} />
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

export default AddBook