import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faEye, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { } from './Login.css';



const Login = () => {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const passIcon = <FontAwesomeIcon icon={faEye} />;
    const arrowIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
    return (
        <div>
            <div className="container">
                <div className="">
                    <div className="col-lg-6 bg-danger login_content">
                        <img src="../../images/Training logo.svg" alt="" />

                        <div>
                            <fieldset>
                                <legend>Email</legend>

                                <input type="email" placeholder="Enter Email" ></input>
                                <input type="email" placeholder="Enter Email" ></input>
                                <input type="email" placeholder="Enter Email" ></input>
                                <span>{emailIcon}</span>
                            </fieldset>
                        </div>







                    </div>

                </div>

                <div className="col-lg-6">

                </div>
            </div>
        </div>







    );
};

export default Login;