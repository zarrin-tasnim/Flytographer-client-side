import React, { useEffect, useState } from 'react';

const ReviewRow = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, phone,message, customer, price, service, status } = order;
    const [orderService, setOrderService] = useState({})

    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-zarrin-tasnim.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])



    return (
        <div>
            <tr>
                <th>
                    <label>
                        <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="rounded w-24 h-24">
                                {
                                    orderService?.img &&
                                    <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{customer}</div>
                            <div>{message}</div>
                        </div>
                    </div>
                </td>
                <th>
                    <button
                        onClick={() => handleStatusUpdate(_id)}
                        className="btn btn-ghost btn-xs">{status ? status : 'pending'}</button>
                </th>
            </tr>
        </div>
    );
};

export default ReviewRow;