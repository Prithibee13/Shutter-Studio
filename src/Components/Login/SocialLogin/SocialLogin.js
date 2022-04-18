import React from 'react';
import "./SocialLogin.css"

import g_icon from '../../../images/icon/g-icon.png';
import fb_icon from "../../../images/icon/fb-icon.png";
import git_icon from "../../../images/icon/git-icon.png"

const SocialLogin = () => {
    return (
        <div>
            <article className='d-flex align-items-center'>
                <div className='w-50 horizontal-line' ></div>
                <p>or</p>
                <div className='w-50 horizontal-line'></div>
            </article>
            <article className='social-provider'>
                <button className='w-50 d-block border-0 shadow-md mb-3 p-2 mx-auto rounded'>
                    <img src={g_icon} className="me-3" height={20} alt="" />
                    Sign with Google
                </button>
                <button className='w-50 d-block border-0 shadow-md mb-3 p-2 mx-auto rounded'>
                    <img height={25} className="me-2" src={fb_icon} alt="" />
                    Sign with Facebook
                </button>
                <button className='w-50 d-block border-0 shadow-md p-2 mb-3 mx-auto rounded'>
                    <img height={25} className="me-3" src={git_icon} alt="" />
                    Sign with Github
                </button>
            </article>
        </div>
    );
};

export default SocialLogin;