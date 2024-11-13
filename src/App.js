import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { ACTION, ORGINALS } from './Constants/urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={ORGINALS} title='Netflix Orginals'/>
      <RowPost url={ACTION}title='Action' isSmall/>
    </div>
  );
}

export default App;
