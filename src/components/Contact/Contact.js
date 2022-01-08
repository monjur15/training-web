import React from 'react';
import { } from './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className='container contact_container p-3'>
                <h1>Contact</h1>
                <div className='down_border'></div>
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className='inputs '>
                            <div className=' '>
                                <input type="email" placeholder='Your Email' />
                            </div>
                            <div>
                                <input type="number" placeholder='Contact' />
                            </div>
                            <div>
                                <textarea class="contact-form-text" placeholder="Description"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;