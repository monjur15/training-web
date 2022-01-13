import React from 'react';
import { Button } from 'react-bootstrap';
import { } from './AdminBlog.css';

const AdminBlog = () => {
    return (
        <div>
            <div className="container py-5">
                <h1 className='py-5'>Admin Blog</h1>
                <form action="">
                    <label for="fname">Title:</label>
                    <input type="text" id="title" name="title"></input>

                    <div className='w-90'>
                        <textarea class="contact-form-text" placeholder="Description"></textarea>
                    </div>
                    <label for="fname">Author:</label>
                    <input type="text" id="author" name="author"></input>
                    <br /><br />

                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>

                    <br /><br />

                    <label for="fname">Publish Time:</label>
                    <input type="date" id="time" name="time"></input>
                    <div className='admin_btn mt-3'><Button variant="primary">Post</Button>{' '}</div>


                </form>
            </div>
        </div>
    );
};

export default AdminBlog;