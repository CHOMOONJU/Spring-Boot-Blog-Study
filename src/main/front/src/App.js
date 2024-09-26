import React, { useState, useEffect } from 'react';
import axios from 'axios'; // axios를 임포트

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    axios.get("/api/test") // 프록시 없이 백엔드 서버에 직접 요청
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  useEffect(() => {
    console.log(message);
  }, [message]); // message가 변경될 때마다 로그 출력

  return (
    <div>
      {message.map((msg, index) => (
        <p key={index}>{msg}</p>
      ))}
    </div>
  );
}

export default App;