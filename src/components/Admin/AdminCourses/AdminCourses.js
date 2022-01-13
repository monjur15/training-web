import React from 'react';
import { } from './AdminCourses.css'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';


const AdminCourses = () => {
    return (
        <div>
            <div className="container ad py-5">
                <h1 className='my-5 '>Admin Courses</h1>


                <form>
                    <label for="fname">Title:</label>
                    <input type="text" id="title" name="title"></input>

                    <div className='w-90'>
                        <textarea class="contact-form-text" placeholder="Description"></textarea>
                    </div>
                    {/* <div className='admin_btn'><Button variant="primary">Post</Button>{' '}</div> */}


                    <div className=''>
                        <label for="DropdownButton">Instructor:</label>

                        <DropdownButton

                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                        >

                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </div>

                    <br />
                    <label for="fname">Fee:</label>

                    <input type="text" id="fee" name="fee"></input>
                    <br />
                    <br />
                    <label for="fname">Classes:</label>

                    <input type="text" id="classes" name="classes"></input>
                    <br />
                    <br />
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>


                    <br /><br />
                    <div className=''>
                        <label for="DropdownButton">Category:</label>

                        <DropdownButton

                            variant="outline-secondary"
                            title="Dropdown"
                            id="input-group-dropdown-1"
                        >

                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </div>




                </form>


            </div>
        </div>
    );
};

export default AdminCourses;