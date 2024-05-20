import axios from 'axios';
import React,  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';



const SingleProduct = () => {
    const params = useParams();
    const [data, setCard] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://ecommerce-backend-fawn-eight.vercel.app/api/products');   
                const data = Array.from(response.data) 
                console.log(response);            
                const foundCard = data.find((el) => el._id === params.id);
                if (foundCard) {
                    setCard(foundCard);
                } else {
                    console.log(`Product with id ${params.id} not found.`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [params.id]); 
    console.log(params.id);
    if (!data) {
        return <div className='.container text-center my-4 font-bold text-3xl'>Loading...</div>;
    }
    return (
        <div className='container mx-auto my-12 w-full h-auto flex justify-center'>
            
            <div className='w-2/3 flex gap-10 items-center h-auto border shadow rounded' key={data._id}>
                    <img className='r rounded-s w-1/2 h-96' src={data.image} alt={data.title} />
                    <div className='p-2 flex flex-col gap-3'>
                        <h1 className='text-2xl font-bold'>{data.title}</h1>
                        <h2 className='text-gray-400 text-xs'>{data.subtitle}</h2>
                        <p>{data.description}...</p>
                        <p className='text-gray-600 text-xl'>{data.price} so'm</p>
                        <div>Color: {data.color}</div>
                        <p className='flex items-center gap-1'>Rate: {data.rate} <img className='w-3 h-3' src="https://www.clipartmax.com/png/middle/307-3078264_star-rating-icon-rating-star-single-png.png" alt="rate" /></p>
                        <p className='font-bold'>Size: {data.size}</p>
                        <div className="flex gap-4">
                                <button className='border rounded-xl p-2'>- 1 +</button>
                                <button className='border rounded-xl p-2'>Add to Cart</button>
                                <button className='border rounded-xl p-2'>+ Compare</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default SingleProduct;
