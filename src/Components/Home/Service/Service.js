import React from 'react';
import "./Service.css"

const Service = (props) => 
{
    const { service } = props;

    const { img , title , price} = service
    return (
        <div>
            <div className="col">
                <div class="card border-0 shadow-lg h-100">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src={img} class="img-fluid h-100" alt="card-img"/>
                        </div>
                        <div class="col-md-6 p-3">
                            <div class="card-body">
                                <h4 class="card-title">{title}</h4>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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