import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tailwind.css';

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
    <ul role="list" className="divide-y divide-gray-100">
      {message.map((msg, index) => (
        <li key={msg.title} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{msg.title}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{msg.content}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{msg.title}</p>
            {msg.title ? (
              <p className="mt-1 text-xs leading-5 text-gray-500">
                Last seen
              </p>
            ) : (
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs leading-5 text-gray-500">Online</p>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default App;