import React from 'react';
import "./Service.css"

const Service = (props) => 
{
    const { service } = props;

    const { img , title , price , description} = service
    return (
        <div>
            <div className="col">
                <div class="card border-0 shadow-lg h-100">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={img} class="img-fluid h-100" alt="card-img"/>
                        </div>
                        <div class="col-md-6 p-2">
                            <div class="card-body">
                                <h4 class="card-title">{title}</h4>
                                <p class="card-text">{description}</p>
                                <p class="card-text"> price : ${price}</p>
                                <button class="card-btn">Book Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;