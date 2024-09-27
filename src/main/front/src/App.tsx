import React from 'react';
import './tailwind.css';
import List from './components/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogForm from './pages/BlogForm';
import Header from './components/section/Header';
import Main from './components/section/Main';

const App:React.FC = () => {

  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog/:id' element={<Blog />} />
          <Route path='/BlogForm/:id' element={<BlogForm />} />
          <Route path='/BlogForm/*' element={<BlogForm />} />
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App;