import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;
