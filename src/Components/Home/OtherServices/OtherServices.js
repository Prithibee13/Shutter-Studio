import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHamburger, faHippo, faMusic } from "@fortawesome/free-solid-svg-icons"
import React from 'react';
import "./OtherService.css"


const OtherServices = () => {
    return (
        <div className='mar-20'>
            <h2 className='text-center'>Other Services</h2>
            <div className="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    <div className="col">
                        <div class="card border-0 shadow-lg h-100">
                            <div class="card-body text-center">
                                <FontAwesomeIcon icon={faHamburger} className="o-icon mb-3" size='5x'></FontAwesomeIcon>
                                <h4 class="card-title">Food Photography</h4>
                                <p class="card-text">Best food photography in town</p>
                                <p>Price : $50</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card h-100 border-0 shadow-lg">
                            <div class="card-body text-center">
                                <FontAwesomeIcon icon={faHippo}  className="o-icon mb-3" size='5x'/>
                                <h4 class="card-title">Wild Photography</h4>

                                <p class="card-text">Best Wildlife photography in town </p>
                                <p>price : $80</p>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div class="card h-100 border-0 shadow-lg">
                            <div class="card-body text-center">
                                <FontAwesomeIcon icon={faMusic} className="o-icon mb-3" size="5x"></FontAwesomeIcon>
                                <h4 class="card-title">Video Editing</h4>
                                <p class="card-text">Best video editing studio in town for any events</p>
                                <p>price : $40</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherServices;