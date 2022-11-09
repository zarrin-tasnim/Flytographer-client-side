import React from 'react';
import './Destinations.css';
import placeImg from '../../assets/images/destination-1.jpg';
import placeImg1 from '../../assets/images/destination-2.jpeg';
import placeImg2 from '../../assets/images/saintmartin-d-3.jpg';

const Destinations = () => {
    return (
        <div>
            <h1 className='text-6xl text-center font-bold'>Favourite Destinations</h1>
            <br />
            <div className='flex grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={placeImg} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Seoul!!!</h2>
                        <p>Visit on  29 May 2022</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={placeImg1} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Sydney!!!</h2>
                        <p>Visit on  29 May 2022</p>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src={placeImg2} alt="Saintmartin" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Saintmartin!!!</h2>
                        <p>Visit on  29 May 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Destinations;