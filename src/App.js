import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import CARDS from './components/CardsItem';
import ReadMore from './components/ReadMore/ReadMore';
import Tabset from './components/Tabset/Tabset';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Header/>
      <h1 className='text-4xl text-yellow-700 mx-auto w-[92%] text-center py-10'>Welcome to our website</h1>
      <Tabset/>
    </div>
  );
}

export default App;
