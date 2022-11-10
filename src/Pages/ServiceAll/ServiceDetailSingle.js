import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from './../../hook/useTitle';
import Review from '../Review/Review';

const ServiceDetailSingle = () => {
    useTitle('ServiceDetails');
    const serviceDetails = useLoaderData(); 
    const { _id, img, price, title, description } = serviceDetails;
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='' src={img} alt="" srcset="" /></figure>
                    </PhotoView>
                </PhotoProvider>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <p>DEscription: {description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/review/${_id}`}>
                            <button className="btn btn-primary">Add Review</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Review></Review>
            </div>
        </div>
    );
};

export default ServiceDetailSingle;