import React, {useState, useEffect} from 'react';

function App() {
  const [message, setMessage]=useState([]);
  useEffect(()=>{
    fetch("/api/test")
        .then((response)=>{
          return response.json();
        })
        .then((data)=>{
            setMessage(data);
        });
  },[]);
  return (
    <div>
        {message}
    </div>
  );
}

export default App;