import React from 'react'

const BookDetails = ({book, onDelete}) => {


  const  handleDelete  = ()=>  {
      onDelete(book.id);
  }


  return (
    <>
      <div className="col-sm-3 mt-4">
             <div className="card" style={{width: "18rem"}}>
             <div className="card-body">
               <h5 className="card-title">{book.title}</h5>
               <button className="btn btn-primary btn-sm w-50">Edit</button>
               <button className="btn btn-danger btn-sm w-50" onClick={handleDelete}>Delete</button>
             </div>
          </div>
        </div>
    </>
  )
}

export default BookDetails
