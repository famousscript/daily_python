import React, { useState } from 'react'

const SearchBar = ({onSubmit}) => {

 const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
     e.preventDefault();
     onSubmit(term);
     setTerm('')
  }

  return (
    <div>
      <h3>Search with - unsplash.com</h3>
        <form onSubmit={handleSubmit}>
       <input type='text' className='form-control' placeholder='Search for...' value={term} onChange={(e)=>setTerm(e.target.value)} />
       </form>
    </div>
  )
}

export default SearchBar
