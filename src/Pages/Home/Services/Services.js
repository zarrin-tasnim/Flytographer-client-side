import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect( () =>{
        fetch('http://localhost:5000/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, []);

   
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-3xl font-bold text-purple-900">Services</p>
                <h2 className="text-5xl font-semibold">Our Service Area</h2>
                <p>Every moment has a story, see their happy moment captured by us.We provide all of these services to our customers.  </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to={`/services`}>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-purple-900">View All</button>
            </Link>
           
        </div>
    );
};

export default Services;