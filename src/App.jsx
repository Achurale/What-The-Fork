import { useState } from 'react';
import Home from './components/pages/home'
import Recipe from './components/pages/recipe'
import Login from './components/pages/login'
import Favorite from './components/pages/favorite'

import Footer from './components/footer'
import Header from './components/header'
import './App.css';
// Importing our theme provider which will make our global state available to child components
import CarProvider from './utils/CarContext';

export default function App() {

  const [currentPage, setCurrentPage] = useState('About')

  const renderPage = () => {
    if (currentPage === 'Login') {
      return <Login />;
    }
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Recipe') {
      return <Recipe />;
    }
    if (currentPage === 'Favorite') {
      return <Favorite />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <section>
        {renderPage()}
      </section>
      <Footer/>
    </>
  );
}
