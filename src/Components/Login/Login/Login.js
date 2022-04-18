import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');
    const type = 'in'
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const location = useLocation()

    const from = location.state?.from?.pathname || '/';
    

    const getEmail = (event) => {
        const email = event.target.value;
        SetEmail(email);
    }

    const getPassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }

    const handleSubmuit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    if (user || googleUser || githubUser) {
        navigate(from , { replace: true });
    }

    let errorElement;

    if (error || googleError || githubError) 
    {
        errorElement = <div><p className='text-danger'>Error: {error?.message} {googleError?.message} {githubError?.message}</p></div>
    }



    return (
        <div className='mar-20'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 mx-auto">
                        <Card className='border-0 shadow-lg'>
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>Please Log in Here</Card.Title>
                                <Card.Subtitle className='text-center'>
                                    Please fill up the form to log in
                                </Card.Subtitle>
                                <Card.Text>
                                    <Form className='my-3 py-3' onSubmit={handleSubmuit}>
                                        <Form.Group className="mb-5" controlId="formBasicEmail">
                                            <Form.Control className='form-control-md' onBlur={getEmail} type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-5" controlId="formBasicPassword">
                                            <Form.Control className='form-control-md' onBlur={getPassword} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Login
                                        </Button>
                                    </Form>
                                    <div>
                                        <p>New in Shutter Studio? <Link to='/register'> <button className='ms-3 btn btn-danger text-white'>Please Register Here</button> </Link> </p>
                                    </div>
                                    <SocialLogin type={type} error={errorElement} signInWithGoogle={signInWithGoogle} signInWithGithub = {signInWithGithub}></SocialLogin>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;