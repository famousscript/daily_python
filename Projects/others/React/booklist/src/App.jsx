import { useState } from 'react';
import './App.css'
import BookAdd from './BookAdd';
import BookList from './BookList';


function App() {

  const [books, setBooks] = useState([]);

  const handleCreate = (title) => {

    const newBook = [
       ...books,
       { id:Date.now(),title }
    ]
    setBooks(newBook);
  }

  const handleDeleteBook = (id) => {
    const updatedData = books.filter(res=> res.id!==id);
    setBooks(updatedData);
  }

  return (
    <>
      <div className='container border p-4 bg-light w-100'>
          <BookAdd  onCreate={handleCreate} />
      </div>
     <div className="container1 mt-4" style={{width:"100%"}}>
           <BookList books={books} onDeleteBook={handleDeleteBook} />
     </div>
    </>
  )
}

export default App
