import React, { useState } from 'react';
import { } from './AdminCourses.css'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';


const AdminCourses = () => {
    function myFunction() {
        alert("Done!");
    }
    const [courseinput, setCourseinput] = useState();
    let getCoursetitle = (eventcoursetitle) => {
        const courseinput = eventcoursetitle.target.value;
        setCourseinput(courseinput);
        console.log(courseinput);
    }
    const [courseDes, setCourseDes] = useState();
    let getCourseDes = (eventcourdes) => {
        const courseDes = eventcourdes.target.value;
        setCourseDes(courseDes);
        console.log(courseDes);
    }
    const [courseIns, setCourseIns] = useState();
    let getCourseIns = (eventcourseIns) => {
        const courseIns = eventcourseIns.target.value;
        setCourseIns(courseIns);
        console.log(courseIns);
    }
    /* const [courseCategory, setCourseCategory = useState();
    let getCourseIns = (eventcourseCategory) => {
        const courseCategory = eventcourseCategory.target.value;
        setCourseCategory(courseCategory);
        console.log(courseCategory);
    }
 */



    const [courseFee, setCourseFee] = useState();
    let getCourseFee = (eventcourseFee) => {
        const courseFee = eventcourseFee.target.value;
        setCourseFee(courseFee);
        console.log(courseFee);
    }

    const [courseClasses, setCourseClasses] = useState();
    let getCourseClassess = (eventcourseClasses) => {
        const courseClasses = eventcourseClasses.target.value;
        setCourseClasses(courseClasses);
        console.log(courseClasses);
    }
    const [courseImg, setCourseImg] = useState("");
    let getBlogimg = (eventCourseImg) => {
        const courseImg = eventCourseImg.target.value;
        setCourseImg(courseImg);
        console.log(courseImg);
    }
    return (
        <div>
            <div className="container ad py-5">
                <h1 className='my-5 '>Admin Courses</h1>


                <form>
                    <label for="fname">Course Title:</label>
                    <input type="text" id="title" name="title" onChange={getCoursetitle}></input>

                    <div className='w-90'>
                        <textarea class="contact-form-text" placeholder="Course Description" onChange={getCourseDes}></textarea>
                    </div>
                    {/* <div className='admin_btn'><Button variant="primary">Post</Button>{' '}</div> */}


                    <div className='' onChange={getCourseIns}>
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
                    <label for="fname">Course Fee:</label>

                    <input type="text" id="fee" name="fee" onChange={getCourseFee}></input>
                    <br />
                    <br />
                    <label for="fname">Classes:</label>

                    <input type="text" id="classes" name="classes" onChange={getCourseClassess}></input>
                    <br />
                    <br />
                    <label for="img">Select image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={getBlogimg}></input>


                    <br /><br />
                    <div className='' onChange={getCourseIns}>
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
                    <div className='admin_btn mt-5'><Button onClick={() => myFunction()} variant="primary">Post</Button>{' '}</div>




                </form>


            </div>
        </div>
    );
};

export default AdminCourses;