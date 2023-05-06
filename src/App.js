import React from 'react';
import {Header, Home, Coins, CoinDetails, Exchanges} from './components'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
function App() {
  return (
    
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coins' element={<Coins />} />
          <Route path='/exchanges' element={<Exchanges />} />
          <Route path='/coin/:id' element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    
  );
}

export default App;
