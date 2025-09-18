import { useState } from 'react';
import './App.css';

function App() {

  const [msg, setMsg] = useState('');
  const [list, setList] = useState([]);

  const handleOnChange = (event) => {
    setMsg(event.target.value);
  }

  const handleOnSave = () => {
    
    setList(current => [...current,msg])
    console.log(list);
    
  }
  return (
    <div>

      <p className='message'>{msg}</p> 
      
      <p>
        Input value <input type='text' name='msg' onChange={handleOnChange} />
      </p>

      <button type='button' onClick={handleOnSave} >Save</button>

    </div>
  );
}

export default App;
