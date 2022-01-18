import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AdminInstructor = () => {
    function myFunction() {
        alert("Done!");
    }
    const [adminstratorName, setAdminstratorName] = useState("");
    let getAdminstratorName = (eventAdminName) => {
        const adminstratorName = eventAdminName.target.value;
        setAdminstratorName(adminstratorName);
        console.log(adminstratorName);
    }
    const [adminstratorDesig, setAdminstratorDesig] = useState("");
    let getAdminstratorDesig = (eventAdminDesig) => {
        const adminstratorDesig = eventAdminDesig.target.value;
        setAdminstratorDesig(adminstratorDesig);
        console.log(adminstratorDesig);
    }
    const [adminstratorDescription, setAdminstratorDescription] = useState("");
    let getAdminstratorDescription = (eventAdminDesig) => {
        const adminstratorDescription = eventAdminDesig.target.value;
        setAdminstratorDescription(adminstratorDescription);
        console.log(adminstratorDescription);
    }
    const [adminstratorImg, setAdminstratorImg] = useState("");
    let getAdminstratorImg = (eventAdminImg) => {
        const adminstratorImg = eventAdminImg.target.value;
        setAdminstratorImg(adminstratorImg);
        console.log(adminstratorImg);
    }
    return (
        <div>
            <div className="container py-5">
                <h1 className='my-5'>Instructor</h1>
                <form action="">
                    <label for="fname">Name:</label>
                    <input type="text" id="name" name="name" onChange={getAdminstratorName}></input>
                    <br /><br />
                    <label for="fname">Designation:</label>
                    <input type="text" id="desig" name="desig" onChange={getAdminstratorDesig}></input>
                    <div className='w-90'>
                        <textarea class="contact-form-text" placeholder="Description" onChange={getAdminstratorDescription}></textarea>
                    </div>


                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={getAdminstratorImg}></input>
                    <div className='admin_btn mt-3'><Button onClick={() => myFunction()} variant="primary">Post</Button>{' '}</div>
                </form>
            </div>
        </div>
    );
};

export default AdminInstructor;