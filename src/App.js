import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Skills from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' Component={Main} />
        <Route path='/contact' Component={Contact} />
        <Route path='/Skills' Component={Skills} />
      </Routes>
      <div className='video-wrapper'>
        <video className='video' autoPlay loop muted playsInline>
          <source src='/background.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  );
}

export default App;
