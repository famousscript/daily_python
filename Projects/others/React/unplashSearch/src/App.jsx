
import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import searchImages from './Api';
import ResultList from './ResultList';



function App() {
  
  const [data, setData] = useState([]);

  const handleSubmit = async (term) => {
      const result = await searchImages(term);      
      setData(result);
  }

  return (
    <>
       <SearchBar onSubmit={handleSubmit} />
       {data && <ResultList dataList={data} /> }
    </>
  )
}

export default App
