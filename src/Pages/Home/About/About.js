import React from 'react';
import person from '../../../assets/images/service-1.jpg'


const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative md:w-1/2 sm:w-full '>
                    <img src={person} alt="" className="w-4/5   h-full   rounded-lg shadow-2xl" />
                    
                </div>
                <div className='w-1/2 mr-6'>
                    <p className="md:text-4xl sm:text-xl  font-bold text-purple-900">About Us</p>
                    <h1 className="my-5   text-5xl font-bold">
                        We are qualified <br />
                        &  experienced <br />
                        in this field</h1>
                    <p className="py-6">
                        This is a business service website.‘Flytographer’ has been shooting life’s most wonderful minutes in the Big Apple and past for over 10 years.From us you can get any kind of pictures in an average price and we will click anywhere. 
                    </p>
                    
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
        
    );
};

export default About;