import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faEye, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { } from './Login.css';



const Login = () => {
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    const passIcon = <FontAwesomeIcon icon={faEye} />;
    const arrowIcon = <FontAwesomeIcon icon={faArrowAltCircleRight} />;
    return (
        <div className="  login_from ">


            <div className="row">
                <div className="col-12 login_part  ">
                    <div className="log_box1">
                        <div className="login_cover">
                            <img src="../../images/Training logo.png" alt=""></img>
                            <h1>Welcome back,</h1>
                        </div>

                        <fieldset className="login_fields">
                            <legend>Email</legend>

                            <input type="email" placeholder="Enter Email" ></input>
                            <span>{emailIcon}</span>
                        </fieldset>
                    </div>
                    <div className="log_box2">

                        <fieldset className="login_fields">
                            <legend>Password</legend>
                            <input type="password" placeholder="Enter Password"></input>
                            <span>{passIcon}</span>
                        </fieldset>
                        <small><a href="#">Forget Password</a></small>
                    </div>

                    <div className="button_div">
                        <button className="blue_btn">Login</button>
                        <h3>or</h3>
                        <a href="#"><img src="../../images/search.png" alt="" /></a>
                        <a href="#"><img src="../../images/facebook.png" alt="" /></a>
                        <a href="#"><h3>Create Account {arrowIcon}</h3></a>

                    </div>
                </div>
                <div className="col-12 login_banner ">

                    <img src="../../images/bg1.png" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Login;