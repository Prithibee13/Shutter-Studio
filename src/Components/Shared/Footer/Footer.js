import React from 'react';
import "./Footer.css"

const Footer = () => 
{
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className='p-5 mar-20'>
            <div className="container">
                <div className="row g-5">
                    <div className="col-md-4 col-12">
                        <h3>Copyright By Aziz Prithibee &copy;{year}</h3>
                    </div>
                    <div className="col-md-4 col-12">
                        <article className='d-flex justify-content-between'>
                            <p>Story</p>
                            <p>Blog</p>
                            <p>Review</p>
                        </article>
                    </div>
                    <div className="col-md-4 col-12">
                        <h4 className='text-center'>Contact Me</h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;