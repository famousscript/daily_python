import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'


function App() {

  const [users, setUsersInfo] = useState([]);

  useEffect(()=> {
   axios.get('/api/userInfo')
   .then((response)=> { 
    setUsersInfo(response.data)
   }).catch((error)=> {
     console.log(error);
   }) 
  }, [])

  return (
    <>
      <h3>User Info</h3>
      {users.length}
  {
    Array.isArray(users) && users.map((data, index) => {
        return (
          <div>
              <h3>{data.name}</h3>
              <p>{data.email}</p>
          </div>
        )
     }) 
  }
      <div>

      </div>
    </>
  )
}

export default App
