import './App.css';
import Nav from "./components/Nav";
import Main from './components/Main';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import AboutUs from "./components/AboutUs"
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Nav/>
      <Main/>
      <Menu/>
      <Testimonial/>
      <AboutUs/>
      <Footer/>
    </Router>
  );
}

export default App;
