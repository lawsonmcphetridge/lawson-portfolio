import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/contact' Component={Contact} />
        <Route path='/Skills' Component={Skills} />
      </Routes>
    </div>
  );
}

export default App;
