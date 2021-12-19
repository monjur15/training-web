import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <Navigation></Navigation>
      <Footer></Footer>
    </>


  );
}

export default App;
