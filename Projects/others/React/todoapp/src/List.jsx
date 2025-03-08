import React, { useState } from 'react'

const List = ({onDataChild}) => {


   const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

   const handleChange = (e) => {
       const {checked, value} = e.target
       onDataChild(checked, value);
   }

  return (
    <div>
      {items.map((item) => (
          <div key={item} className='form-check'>
            <input
              type="checkbox"
              id={item}
              value={item || ""}
              onChange={handleChange}
              className='form-check-input'
            />
            <label className="form-check-label" for="flexCheckDefault" htmlFor={item}>{item}</label>
          </div>
        ))}

    </div>

  )
}

export default List
