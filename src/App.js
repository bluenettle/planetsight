import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import KnowledgebasePage from './pages/KnowledgebasePage';
import MapPage from './pages/MapPage';
import PostPage from './pages/PostPage';


function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='map' element={<MapPage />} />
        <Route path='knowledgebase' element={<KnowledgebasePage />} />
        <Route path='post' element={<PostPage />} />
      </Routes>
    </div>

  );
}

export default App;
