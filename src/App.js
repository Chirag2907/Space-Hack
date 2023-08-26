import './App.css';
import Particle  from './components/bg-particle/particle';
import Navbar from './components/navbar/navbar';
import HeroSection from './components/hero-section/herosection';
import Form from './components/Form/Form';
import Predict from './components/Prediction/Predict';

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
        <Route path='/Predict' element={<Predict />} />
      </Routes>
    <Particle />
    </div>
  );
}

export default App;
