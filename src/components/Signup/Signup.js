import React from 'react';
import { } from './Signup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import signupbanner from '../../images/Training logo.png';


const Signup = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const passwordIcon = <FontAwesomeIcon icon={faLock} />;
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
    return (
        <div>
            <div className='container'>
                <div className="row signup_main">
                    <div className="col-lg-6 signup_col1">
                        <div className='bubble1'></div>
                        <div className='bubble2 my-3'></div>
                        <img className='mt-5' src={signupbanner} alt="" />
                        <div className='bubble3 my-5'></div>

                    </div>

                    <div className="col-lg-6">
                        <div className='signup_cap py-5'>
                            <h1>Create Account</h1>
                        </div>

                        <div className=''>
                            <div className='signup_fields pt-3 '>
                                <input type="text" placeholder='Enter Username' />
                                <span><a href="">{userIcon}</a></span>

                            </div>
                            <div className='signup_fields pt-3 '>
                                <input type="text" placeholder='Enter Email Address' />
                                <span><a href="">{emailIcon}</a></span>

                            </div>
                            <div className='signup_fields pt-3 '>
                                <input type="text" placeholder='Enter Password' />
                                <span><a href="">{passwordIcon}</a></span>

                            </div>
                            <div className='signup_fields pt-3 '>
                                <input type="text" placeholder='Enter Contact Number' />
                                <span><a href="">{phoneIcon}</a></span>

                            </div>
                        </div>

                        <div className='sign_up'>
                            <div className='contact_btn py-3'>
                                <button className='blue_btn'>Sign Up</button>
                            </div>
                            <a href="#"><h3>Login</h3></a>
                            <div className='bottom_bor'></div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Signup;