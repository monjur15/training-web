import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';



function App() {
  return (
    <>
      <Navigation></Navigation>
      <Home></Home>
      <Footer></Footer>
    </>


  );
}

export default App;
