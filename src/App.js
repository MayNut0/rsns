import { Routes, Route } from 'react-router-dom';

import './App.css';

import Header from './component/Header';
import Footer from './component/Footer';
import HomePage from './pages/HomePage';
import CharPage from './pages/CharPage';
import AffixPage from './pages/AffixPage';

function App() {
  return (
    <div className='App'>
      <div className='layouts-layout'>
        <Header />
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/affix' element={ <AffixPage /> } />
          <Route path='/charater/:charName' element={ <CharPage /> } />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
