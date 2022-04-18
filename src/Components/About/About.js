import React from 'react';

import my_img from "../../images/IMG_9578.jpg"

const About = () => {
    return (
        <div className='mar-20'>
            <div className="container">
                <div className="row g-5 d-flex align-items-center">
                    <div className="col-md-6 col-12">
                        <h1>I am <span className='d-block'> Aziz Ul Karim</span></h1>
                        <p>I am a junior font-end web developer. I have a dream that one day  I will become a full-stack web developer. I have also dream that I will develop AI based systems , which help people to find there basic needs dynamically. I have also dream to be a good human being, helping people all of my knowledge.  </p>
                    </div>
                    <div className="col-md-6 col-12">
                        <img src={my_img} className="w-100 rounded" alt="" />
                    </div>
                    <div className="col-md-4 col-12 mx-auto">
                        <p>I do my work very calmly. So I try do it with cool head. I try to learn new things evrey day. I try to practice them every day. I believe practice makes a man perfect. So I practice my learned work day by day . It make me stronger in these area.</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;