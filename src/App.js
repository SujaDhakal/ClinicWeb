import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
