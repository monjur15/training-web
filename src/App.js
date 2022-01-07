import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, ButtonGroup } from 'react-bootstrap';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Nav from './components/Navigation/Navigation';
import CourseDetail from './components/CourseDetail/CourseDetail';




function App() {
  return (
    <>
      <Navigation></Navigation>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/coursesDetail" element={<CourseDetail />} />
          {/* <Route exact path="" element={<Footer />} /> */}



        </Routes>
        <Footer></Footer>
      </Router>


      {/* <Navigation></Navigation>
      <Home></Home>
      <Courses></Courses>
      <Footer></Footer> */}
    </>


  );
}

export default App;
