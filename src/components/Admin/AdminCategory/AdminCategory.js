import React, { useState } from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';

const AdminCategory = () => {
    const [categoryinput, setCategoryinput] = useState();
    let getCategory = (eventcategory) => {
        const categoryinput = eventcategory.target.value;
        setCategoryinput(categoryinput);
        console.log(categoryinput);
    }
    function myFunction() {
        alert("Done!");
    }
    return (
        <div>
            <div className="container py-5">
                <h1 className='py-5'>Admin Category</h1>
                <label for="fname">Category:</label>
                <input type="text" id="category" name="category" onChange={getCategory}></input>
            </div>
        </div>
    );
};

export default AdminCategory;