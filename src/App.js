import './App.css';
import Particle  from './components/bg-particle/particle';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/hero-section/herosection';
import Form from './components/Form/Form'

import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    <Particle />
    </div>
  );
}

export default App;
