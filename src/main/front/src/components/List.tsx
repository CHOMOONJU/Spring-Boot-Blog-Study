import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface Article {
    id: number;
    title: string;
    content: string;
  }

const List = () => {
  const [message, setMessage] = useState<Article[]>([]);

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
    <div className="container mx-auto p-4">
      <ul role="list" className="divide-y divide-gray-100">
        {message.map((msg, index) => (
          <li key={msg.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{msg.title}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{msg.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
