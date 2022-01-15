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
                <label for="fname">Category:</label>
                <input type="text" id="category" name="category"></input>
            </div>
        </div>
    );
};

export default AdminCategory;