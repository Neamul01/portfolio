import './App.css';
import "swiper/css/bundle";
import Home from './components/Home/Home';
// import Navbar from './components/Home/Navbar';
// import Footer from './components/Home/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Admin/Login';
import { Toaster } from 'react-hot-toast';
import Signup from './components/Admin/Signup';
import Dashboard from './components/Admin/Dashboard';
import ProjectDetails from './components/Home/ProjectDetails';


function App() {
  return (<>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='project/:id' element={<ProjectDetails />} />
        <Route path='admin' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='dashboard' element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
      <Toaster />
    </div>
  </>
  );
}

export default App;
