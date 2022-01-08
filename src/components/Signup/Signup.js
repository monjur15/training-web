import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Signup.css'

const Signup = () => {
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const passwordIcon = <FontAwesomeIcon icon={faLock} />;
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />;
    return (
        <div className='signup_main'>
            <div className="signup_banner">

                <div className='ellipse1'>
                    <div className='bubble1'></div>
                    <div className='bubble2'></div>
                </div>
                <div className='signup_pic'><img src="../../images/Training logo.png" alt="" />

                </div>
                <div className='ellipse3'>
                    <div className='bubble3'></div>
                </div>
            </div>

            <div className='signup_here'>
                <h1>Create Account</h1>
                <div className='signup_fields'>
                    <input type="text" placeholder='Enter Username' />
                    <span>{userIcon}</span>

                </div>

                <div className='signup_fields'>
                    <input type="email" placeholder='Enter Email Address' />
                    <span>{emailIcon}</span>

                </div>

                <div className='signup_fields'>
                    <input type="password" placeholder='Enter Password' />
                    <span>{passwordIcon}</span>

                </div>

                <div className='signup_fields'>
                    <input type="tel" placeholder='Enter Contact Number' />
                    <span>{phoneIcon}</span>

                </div>

                <div className='sign_up'>
                    <button className="blue_btn">Sign Up</button>
                    <a href="#"><h3>Login</h3></a>
                    <div className='bottom_bor'></div>

                </div>

            </div>

        </div>
    );
};

export default Signup;