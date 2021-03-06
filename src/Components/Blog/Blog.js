import React from 'react';

const Blog = () => {
    return (
        <div className='mar-20'>
            <h2 className='text-center my-5 py-5'>A font-end developer must know</h2>

            <div className="container">
                <div className="row g-5">
                    <h3 className='text-center my-3 py-3'>What is differnt between Authentication and Autherization</h3>
                    <div className="col-md-8 col-12 mx-auto">
                        <p>
                            Authentication is a process to verifying who someone is.</p>
                        <p>Autherization is a process verifying a user and his accessabilty and restriction in the system</p>

                        <p>Authentication is the first step to start using the systems</p>
                        <p>Autherization take place after authentication</p>

                        <p>Authentication can be update , delete , create by user.</p>
                        <p>Autherization can not be update or create by user. It always handle By admin</p>
                    </div>
                    <h3 className="text-center my-3 py-3">
                        Why are you using firebase? What other options do you have to implement authentication?
                    </h3>
                    <div className="col-md-8 col-12 mx-auto">
                        <p>We mainly use firebase to use authentication system and use authentication service of providers like google , facebook , github etc. Firebase is a google service which give free authentication services through provider. There are many other providers who can give authentication service , like okta , Auth0 etc</p>
                    </div>

                    <h3 className='text-center my-3 py-3'>What other services does firebase provide other than authentication?</h3>
                    <div className="col-md-8 col-12 mx-auto">
                        <p>Firebase provide some vital utility to a system. They provide smooth authentication process and providers. The also provide hosting , database , macine learning , google analytic etc. It help developer in many ways.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;