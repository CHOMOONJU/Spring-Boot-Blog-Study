import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("/api/articles")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <div>
      {message.map((msg, index) => (
        <div key={index}>
          <h3>{msg.title}</h3>
          <p>{msg.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;