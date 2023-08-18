import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './app/Home';
import About from './app/About';
import Services from './app/Services';
import Contact from './app/Contact';
import Gallery from './app/Gallery';
import NotFound from './app/NotFound';


function App() {
  return (
    
    <Routes>
        <Route path='' index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<NotFound/>}/>
        <Route path='*' element={<NotFound/>}/>
       
    </Routes>
   
  );
}

export default App;
