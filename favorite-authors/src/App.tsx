import './App.css';
import Header from './components/Header';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import List from './components/List';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EditBook from './components/EditBook';

function App() {

  const [books, setBooks] =useState([])

  useEffect(() => {
      console.log("hello useEffect");
      axios.get("http://localhost:8080/list") // TODO - have to create this route in the backend???
          .then(res => {
              console.log('axios data: ', res.data);
              setBooks(res.data)
              console.log('books state', books);
          })
          .catch(err => {
              console.log(err);
              console.log("we have an error!!!");
          })
  }, []);
      
  return (
    <div className="App">
      <h1> Favorite Authors </h1>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
          <Route path="/list" element={<List list={books}/>}/>
          <Route path="/new" element={<AddBook/>}/>
          <Route path="/editbook/:id" element={<EditBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
