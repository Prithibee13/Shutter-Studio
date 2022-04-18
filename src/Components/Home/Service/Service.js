import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "./Service.css"

const Service = (props) => {
    const { service } = props;

    const { img, title, price, description } = service;

    const navigate = useNavigate();

    const [user] = useAuthState(auth)


    return (
        <div>
            <div className="col">
                <div class="card border-0 shadow-lg h-100">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={img} class="img-fluid h-100" alt="card-img" />
                        </div>
                        <div class="col-md-6 p-2">
                            <div class="card-body">
                                <h4 class="card-title">{title}</h4>
                                <p class="card-text">{description}</p>
                                <p class="card-text"> price : ${price}</p>
                                <Link to="/cheackout">
                                    <button class="card-btn" >Book Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;