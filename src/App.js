import './App.css';
import "swiper/css/bundle";
import Home from './components/Home/Home';
import Navbar from './components/Home/Navbar';
import Footer from './components/Home/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Admin/Login';
import { Toaster } from 'react-hot-toast';


function App() {
  return (<>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='admin' element={<Login />} />
      </Routes>
      <Footer />
      <Toaster />
    </div>
  </>
  );
}

export default App;
