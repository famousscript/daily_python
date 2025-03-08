
import './App.css';
import List from './List';
import Details from './Details';
import { useState } from 'react';

function App() {

  const [listData, setListData] = useState('');

  const handleChildData = (checked, data) => {
      if(checked) {
        setListData((prev)=> [...prev, data])
      } else {
        setListData((prev)=> prev.filter((val)=> val!==data))
      }
  }
  
  return (
    <>
      <div className="container w-100 p-4">
          <div className="row border">
            <div className="col-md-6 p-4">
                 <List onDataChild={handleChildData}  />
            </div>
             <div className="col-md-6 p-4">
               <Details listDataValues={listData} />
            </div>
          </div>
      </div>
    </>
  )
}

export default App
