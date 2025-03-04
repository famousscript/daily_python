import React from 'react'
import BookDetails from './BookDetails';


const BookList = ({books, onDeleteBook}) => {

  return (
    <div>
        <div className="row">
           {books && books.map(res=> {
       return (
          <BookDetails onDelete={onDeleteBook} key={res.id} book={res} />
          )
      }) }
      </div>
    </div>
  )
}

export default BookList
