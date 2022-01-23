import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faEye, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { } from './Login.css';
import bg1 from '../../../src/images/bg1.png';
import subs from '../../../src/images/Subtraction 1.jpg';
import { FaBeer, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';




const Login = () => {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const passIcon = <FontAwesomeIcon icon={faEye} />;
    const arrowIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-6  login_content">
                        <div className='login_header py-5'>
                            <img src="../../images/Training logo.svg" alt="" />
                            <h1 className='mt-5'>Welcome Back,</h1>

                        </div>
                        <div className='email'>

                            <div className='input_data'>
                                <input type="text" required></input>
                                <label htmlFor="">Email</label>
                                <span><a href='#'>{emailIcon}</a></span>
                            </div>


                        </div>
                        <div className='email'>

                            <div className='input_data'>
                                <input type="password" required></input>
                                <label htmlFor="">Password</label>
                                <span><a href='#'>{passIcon}</a></span>

                            </div>


                        </div>
                        <div className='forget'>
                            <span className='f_span '>
                                <a href="" >Forget Password?</a>

                            </span>
                            <div className='contact_btn py-3'>
                                <button className='blue_btn'>Log In</button>
                                <p>or</p>



                            </div>
                        </div>

                        <div className=' login_icons'>
                            <div className='sub_icon'>
                                <a className=' me-1' href=""><FaGoogle /></a>
                                <a className=' ms-1' href=""><FaFacebook /></a>

                            </div>

                            <a href="#"><h5 className='py-3'>Create Account {arrowIcon}</h5></a>


                        </div>




                    </div>
                    <div className="col-lg-6 login_img py-5">
                        <img className='img-fluid' src={bg1} alt="" />


                    </div>


                </div>


            </div>

        </div>







    );
};

export default Login;


























