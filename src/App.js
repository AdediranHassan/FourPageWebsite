import Home from './components/Home'
import Obama from './components/Obama'
import Biden from './components/Biden'
import Trump from './components/Trump'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Obama' element={<Obama/>}></Route>
          <Route path='/Biden' element={<Biden/>}></Route>
          <Route path='/Trump' element={<Trump/>}></Route>
        </Routes>
    </>
  );
}

export default App;
