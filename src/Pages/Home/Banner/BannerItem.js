import React from 'react';
import './BannerItem.css';

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={image} alt="" className="w-full rounded-xl" />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className=' font-bold text-white  md:text-6xl sm:text-sm sm:mt-0 mb-12'>
                   
                       Click <br />
                    What You <br />
                    WANT TO 
                    <br />
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='md:text-2xl sm:text-sm mt-1 text-white'><br/>To Get expert photographers and amazing photos, starting from just USD 129 in 500+ cities worldwide.</p>
                </div>
            
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;