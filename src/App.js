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
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';




function App() {
  return (
    <>
      <Navigation></Navigation>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/coursesDetail" element={<CourseDetail />} />
          <Route exact path="/gallery" element={<Gallery />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="" element={<Footer />} /> */}



        </Routes>
        <Footer></Footer>
        <Login></Login>
      </Router>


      {/* <Navigation></Navigation>
      <Home></Home>
      <Courses></Courses>
      <Footer></Footer> */}
    </>


  );
}

export default App;
