import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './components/Navbar/Navbar';
import SearchPage from './components/SearchPage/SearchPage';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Profile from "./components/Profile/Profile"
import Card from './components/Card/Card';
import AboutUs from './pages/AboutUs/AboutUs';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path='/AboutUs' element={<AboutUs/>} />
    <Route path="/Home" element={<Home />} />
    <Route path="/Profile" element={<Profile/>}/>"
    <Route path="/Card" element={<Card />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/search/:searchTerm" element={<SearchPage/>} />

    <Route path="/product/:ItemId" element={<ProductDetail/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
