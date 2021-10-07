import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(()=> {
    axios.get(URL)
      .then((response) => {
        setMessage(response.data);
      }).catch(error => {
        alert(error);
      });
  }, [])
  return (
    <div className="App">
      <h3>Message from web-server</h3>
    </div>
  );
}

export default App;
