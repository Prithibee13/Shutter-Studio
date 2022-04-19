import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('Services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mar-10'>
            <h2 className='text-center my-5 py-5'>Our services</h2>
            <article className='container'>
                <div class="row row-cols-1 row-cols-md-2 g-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </article>
        </div>
    );
};

export default Services;