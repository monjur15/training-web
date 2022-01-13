import React from 'react';

const AdminInstructor = () => {
    return (
        <div>
            <div className="container py-5">
                <h1 className='my-5'>Admin Constructor</h1>
                <form action="">
                    <label for="fname">Name:</label>
                    <input type="text" id="name" name="name"></input>
                    <br /><br />
                    <label for="fname">Designation:</label>
                    <input type="text" id="desig" name="desig"></input>
                    <div className='w-90'>
                        <textarea class="contact-form-text" placeholder="Description"></textarea>
                    </div>


                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*"></input>
                </form>
            </div>
        </div>
    );
};

export default AdminInstructor;