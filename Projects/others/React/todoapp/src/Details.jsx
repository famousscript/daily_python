import React from 'react'

const Details = ({listDataValues}) => {
  return (
    <div className='border'>
      <h5>Details</h5>
      <div className='list'>
          {listDataValues && listDataValues.join(', ')}
      </div>
    </div>
  )
}

export default Details 
