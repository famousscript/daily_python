import React from 'react'

const ResultList = ({dataList}) => {
  return (
    <div>
      <div className="row">
      
        {dataList && dataList.map((res)=> {
         return (
          <div className="col-sm-3 mt-4">
         <div className="card">
          <div className="card-body">
             <img  width="100px" height={"100px"} className="card-img-top" src={res.urls.small} alt={res.alt_description}></img>
            <h5 className="card-title text-sm">{(res.alt_description).toUpperCase()}</h5>
          </div>
        </div>
         </div>
        )})
        }

        {dataList && dataList.length===0 && <h4 className='mt-3 text-danger'>{"No Result found..."}</h4> }
     
    </div>
    </div>
  )
}

export default ResultList
