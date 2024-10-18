import './App.css';
import Nav from "./components/Nav";
import Main from './components/Main';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <Nav/>
      <Main/>
      <Menu/>
      <Testimonial/>
      <Footer/>
    </Router>
  );
}

export default App;
