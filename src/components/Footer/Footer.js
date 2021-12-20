import React from 'react';
import { Button, FormControl, InputGroup, Nav, NavLink } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUser, faAddressBook, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { } from './Footer.css';

const Footer = () => {
    const userIcon = <FontAwesomeIcon icon={faIgloo} />
    return (
        <div className=' footer '>
            <div className='container'>
                <div className='  row  sub_container p-lg-4'>
                    <div className='col-lg-8 col-md-12 mt-4 '>

                        <div className='row'>

                            <div className='col'>
                                <h5>Company</h5>
                                <Nav.Link href="/home">About</Nav.Link>
                                <Nav.Link href="/career">Career</Nav.Link>
                                <Nav.Link href="/contact">Contact Form</Nav.Link>
                            </div>

                            <div className='col'>
                                <h5>Cources</h5>
                                <Nav.Link href="/linux">Linux</Nav.Link>
                                <Nav.Link href="/pythone">Python</Nav.Link>
                                <Nav.Link href="/node">Node.js</Nav.Link>
                                <Nav.Link href="/more">More</Nav.Link>
                            </div>

                            <div className='col'>
                                <h5>Terms</h5>
                                <Nav.Link href="/terms">Terms of use</Nav.Link>
                                <Nav.Link href="/policy">Privacy Policy</Nav.Link>
                                <Nav.Link href="/copyright">Copyright Notice</Nav.Link>
                            </div>

                        </div>



                    </div>
                    <div className='col-lg-3 col-md-12 mt-4'>
                        <h5>Newsletter</h5>
                        <p>Don't miss any updates. Stay with us.</p>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="email"
                                aria-label="emai"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-primary" id="button-addon2">
                                Subscribe
                            </Button>
                        </InputGroup>
                        <div className='footer_link row'>
                            <div>
                                <Nav.Link href="/facebook"><img src="../../images/facebook.png" alt="" /></Nav.Link>
                            </div>
                            <div>
                                <Nav.Link className='bg-dark' href="/instagram">{userIcon}</Nav.Link>
                            </div>
                            <div>
                                <NavLink className='bg-dark done' href="/linkedin"><img src="../../images/bg1.png" alt="" /></NavLink>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='border mb-3 mb-md-2'> </div>
                <div className='row copyright p-2'>
                    <small>Tecognize Training | All rights reserved</small>
                </div>
            </div>


        </div >


    );
};

export default Footer;