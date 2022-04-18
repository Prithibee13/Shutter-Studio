import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification : true});

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth , {sendEmailVerification : true});
    
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth , {sendEmailVerification : true});

    
    
    if (user || googleUser || githubUser) {
        navigate('/home');
    }


    

    const getName = (event) => {
        const name = event.target.value;
        setName(name);
    }

    const getEmail = (event) => {
        const email = event.target.value;
        setEmail(email)
    }

    const getPassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        createUserWithEmailAndPassword(email , password)
    }

    const type = "up";
    
    let errorElement;

    if (error || googleError || githubError) 
    {
        errorElement = <div><p className='text-danger'>Error: {error?.message} {googleError?.message} {githubError?.message}</p></div>
      }

    return (
        <div className='mar-10'>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-12 mx-auto">
                        <Card className='border-0 shadow-lg'>
                            <Card.Body>
                                <Card.Title className='text-center mb-3'>Please Register Here</Card.Title>
                                <Card.Subtitle className='text-center'>
                                    Please fill up the form to  Register
                                </Card.Subtitle>
                                <Card.Text>
                                    <Form className='my-3 py-3' onSubmit={handleSubmit}>
                                        <Form.Group className="mb-5" controlId="formBasicName">
                                            <Form.Control className='form-control-md' onBlur={getName} type="text" placeholder="Enter name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-5" controlId="formBasicEmail">
                                            <Form.Control className='form-control-md' onBlur={getEmail} type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-5" controlId="formBasicPassword">
                                            <Form.Control className='form-control-md' onBlur={getPassword} type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Register
                                        </Button>
                                    </Form>
                                    <div>
                                        <p>Already registered? <Link to='/login'> <button className='ms-3 btn btn-danger text-white'>Please login Here</button> </Link> </p>
                                    </div>
                                    <SocialLogin type={type} signInWithGoogle = {signInWithGoogle} error={errorElement} signInWithGithub = {signInWithGithub}></SocialLogin>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;