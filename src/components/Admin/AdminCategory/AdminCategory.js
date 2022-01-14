import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

const AdminCategory = () => {
    function myFunction() {
        alert("Done!");
    }
    return (
        <div>
            <div className="container py-5">
                <h1 className='py-5'>Admin Category</h1>
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
                    <div className='admin_btn mt-5'><Button onClick={() => myFunction()} variant="primary">Post</Button>{' '}</div>
                </div>
            </div>
        </div>
    );
};

export default AdminCategory;