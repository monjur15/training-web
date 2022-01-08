import React from 'react';
import { } from './About.css';
import agency from '../../images/agency.jpg';

const About = () => {
    return (
        <div>
            <div className='container'>
                <div className='p-2 about_sec'>
                    <h1>About</h1>
                    <div className='down_border mb-5'></div>
                    <p>Tecognize Training is the training wing of Tecognize Solutions Limited where we operate provide online courses
                        spanning from fundamentals to cutting-edge technology.
                        Through the development and transmission of digital skills, experience, and ideas from our innovative learning
                        environment, our always-on learning agenda promotes an ongoing progressive environment.
                        Employed with a team of highly-skilled professionals, Tecognize Training is moving forward with a vision to offer
                        excellent learning experiences to learners all around the world. We are a global platform entitled to provide
                        courses on different subjects to anyone, anywhere.</p>
                </div>

                <div className=' mt-5'>
                    <div className="row">
                        <div className="mission_img p-3  col-lg-6 col-md-12 ">
                            <img className='img-fluid' src={agency} alt="" />
                        </div>

                        <div className="mission_des p-3 col-lg-6 col-md-12 ">
                            <h3>Our Mission</h3>
                            <p>With the help of our ever-developing team of efficient instructors,
                                we aim to provide our learners high-quality education that has been
                                enhanced with quality content.
                                Required initiatives will be developed and invested in to create a
                                diverse workplace that reflects the variety of the communities in
                                which we operate.
                                Our mission is to be a global leader in collaborating with businesses
                                to help them change and manage their operations using technology.
                                Every day, the Group is guided by its mission of releasing individualistic
                                potential via technology for a more inclusive and sustainable future.
                                We aim to become a world-class organization by cultivating a
                                diverse and inclusive culture, which fuels our creativity, improves
                                our work experience, and enables our success in a changing world.
                                Our mission is to make the world a better place through improving
                                people's lives by IT innovation so that we can help our clients
                                achieve their goals. We aim to create solutions that encourage
                                creativity, promote equality, and open doors across borders
                                and cultures.</p>
                        </div>
                    </div>
                </div>

                <div className=' mt-5'>
                    <div className="row">
                        <div className="vission_des p-3 col-lg-6 col-md-12 ">
                            <h3>Our Vission</h3>
                            <p>We envision a world, where anyone can learn anything they want, from
                                anywhere, and use that learning to make their lives better.
                                Our vision is to be trusted by our clients to address the entire breadth
                                of their business needs, from strategy and design to operations,
                                fueled by the fast evolving and innovative world of cloud, data,
                                AI, connectivity, software, digital engineering, and platforms,
                                thanks to our deep industry expertise.
                                At Tecognize, we maintain an environment where we take care of our
                                clients and each other, and foster a culture of belonging and inclusion.
                                Our vision is to keep working as a global entity delivering quality work
                                through adequate effort and dedication.
                                We put our faith on creating a society with sustainable development and
                                meeting 21st century’s requirements throughout communities.We'll keep
                                growing and expanding our duties. More importantly, we will continue to
                                push ourselves to be change leaders.</p>
                        </div>
                        <div className="vission_img p-3  col-lg-6 col-md-12 ">
                            <img className='img-fluid' src={agency} alt="" />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;