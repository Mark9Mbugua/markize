import React from 'react';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';

import Main from  './pages/main/main.component';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
