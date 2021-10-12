import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost/php1/index.php';

function App() {
  const [message, setMessage] = useState('');
  const [origin, setOrigin] = useState('');
  useEffect(()=> {
    axios.get(URL)
      .then((response) => {
        setMessage(response.data.message);
        console.log(message)
        setOrigin(response.data.origin);
        console.log(origin)
      }).catch(error => {
        alert(error);
      });
  }, [])
  return (
    <div>
      <h3>Message from web-server</h3>
      <p>{message}</p>
      <h3>Your address is</h3>
      <p>{origin}</p>
    </div>
  );
}

export default App;
