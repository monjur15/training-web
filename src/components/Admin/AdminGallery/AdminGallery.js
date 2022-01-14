import React from 'react';
import { Button, Dropdown, DropdownButton, FormControl, InputGroup } from 'react-bootstrap';

const AdminGallery = () => {
    function myFunction() {
        alert("Done!");
    }
    return (
        <div>
            <div className="container py-5">
                <h1 className='my-5'>Admin Gallery</h1>


                <form>
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>

                    <div className='w-90'>
                        <textarea class="contact-form-text" placeholder="Description"></textarea>
                    </div>
                    <div className='admin_btn'><Button onClick={() => myFunction()} variant="primary">Post</Button>{' '}</div>



                </form>


            </div>
        </div>
    );
};

export default AdminGallery;