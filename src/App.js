import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './app/Home';
import About from './app/About';
import Services from './app/Services';
import Contact from './app/Contact';
import Login from './app/Login';
import Dashboard from './app/Dashboard';


function App() {
  return (
    
    <Routes>
        <Route path='' index element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='services' element={<Services/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
       
    </Routes>
   
  );
}

export default App;
