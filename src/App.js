import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { ACTION, COMEDY, DOCUMENTARY, HORROR, ORGINALS, ROMANCE } from './Constants/urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={ORGINALS} title='Netflix Orginals'/>
      <RowPost url={ACTION}title='Action' isSmall/>
      <RowPost url={COMEDY}title='Comedy' isSmall/>
      <RowPost url={HORROR}title='Horror' isSmall/>
      <RowPost url={ROMANCE}title='Romance' isSmall/>
      <RowPost url={DOCUMENTARY}title='Documentary' isSmall/>
    </div>
  );
}

export default App;
