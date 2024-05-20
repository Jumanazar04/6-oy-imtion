import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Client = () => {
    const [cards, setCards] = useState([]);
    
    async function getData(){
        try {
            const response = await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/products")
            setCards(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    console.log();
    getData()
    return (
        <div className='container px-8 mx-auto flex flex-wrap gap-4 justify-between'>
            {cards.map((data) => (
                <Link to={`/product/${data._id}`} className='w-1/5 h-auto border shadow rounded' key={data._id}>
                    <img className='r rounded-s w-full h-48' src={data.image} alt={data.title} />
                    <div className='p-2 flex flex-col gap-1'>
                        <h1 className='text-2xl font-bold'>{data.title}</h1>
                        <h2 className='text-gray-400 text-xs'>{data.subtitle}</h2>
                        <p>{data.description}...</p>
                        <p className='text-gray-600 text-xl'>{data.price} so'm</p>
                        <div>Color: {data.color}</div>
                        <p className='flex items-center gap-1'>Rate: {data.rate} <img className='w-3 h-3' src="https://www.clipartmax.com/png/middle/307-3078264_star-rating-icon-rating-star-single-png.png" alt="rate" /></p>
                        <p className='font-bold'>Size: {data.size}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Client;
