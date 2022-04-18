import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
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
                                    <Form className='my-3 py-3'>
                                        <Form.Group className="mb-5" controlId="formBasicEmail">
                                            <Form.Control className='form-control-md' type="text" placeholder="Enter name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-5" controlId="formBasicEmail">
                                            <Form.Control className='form-control-md' type="email" placeholder="Enter email" required />
                                        </Form.Group>

                                        <Form.Group className="mb-5" controlId="formBasicPassword">
                                            <Form.Control className='form-control-md' type="password" placeholder="Password" required />
                                        </Form.Group>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                    <p>Already registered? <Link to='/login'> <button className='ms-3 btn btn-danger text-white'>Please login Here</button> </Link> </p>
                                    <SocialLogin></SocialLogin>
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