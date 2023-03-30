import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
        <Header></Header>
      <Routes>

        <Route path='/' Component={Main}/>

      </Routes>
    </div>
  );
}

export default App;
