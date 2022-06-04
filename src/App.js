import './App.css';
import "swiper/css/bundle";
import Home from './components/Home/Home';
import Footer from './components/Home/Footer';
import Navbar from './components/Home/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
