import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data);
    }
    fetchProduct();
  }, [])

  return (
    <div className="App1">
      
      <ul>
        {products && products.map((res) => {
          return <li>{res.name }</li>
       })} 
      </ul>
      
    </div>
  );
}

export default App;
