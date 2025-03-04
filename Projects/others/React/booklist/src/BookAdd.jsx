import React, { useState } from 'react'

const BookAdd = ({onCreate}) => {

   const [title, setTitle] = useState('');

   const handleTitle = (e) => {
       setTitle(e.target.value)
   }


   const handleSubmit = (e) => {
      e.preventDefault();
      onCreate(title);
      setTitle("")
   }


  return (
    <div className='row '>
        <div className="col-6 mx-auto">
           <div className='form-group'>
               <form className='form-group' onSubmit={handleSubmit} >
                <input placeholder='Enter Book title here' type='text' value={title} onChange={handleTitle} className='form-control'/>
                <button type='submit' className='btn btn-secondary btn-md mt-4 w-50'>Add Book</button>
           </form>
           </div>
          
        </div>
    </div>
  )
}

export default BookAdd
