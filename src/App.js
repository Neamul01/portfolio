import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import WorkSlider from './components/WorkSlider';
import "swiper/css/bundle";
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Skills />
      <WorkSlider />
      <Footer />
    </div>
  );
}

export default App;
