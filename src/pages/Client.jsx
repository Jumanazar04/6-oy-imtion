import axios from 'axios';
import React, { useState } from 'react';

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
    getData()
    return (
        <div>
            {cards.map((data) => (
                <div key={data._id}>
                    <img src={data.image} alt={data.title} />
                    <div>
                        <h1>{data.title}</h1>
                        <h2>{data.subtitle}</h2>
                        <p>{data.description}</p>

                    </div>
                </div>
            ))}
        </div>
    );
}

export default Client;
