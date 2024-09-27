import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './tailwind.css';

interface Article {
  id: number;
  title: string;
  content: string;
}

function App() {
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
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog/:id' element={<Blog />} />
          <Route path='/BlogForm/:id' element={<BlogForm />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App;