import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the new Footer component
import './App.css'; // Ensure App.css is imported here for global styles

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {/* Render the Footer component here */}
    </Router>
  );
}

export default App;
