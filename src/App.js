import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import CharaterPage from './pages/CharaterPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/:charName' element={ <CharaterPage /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
