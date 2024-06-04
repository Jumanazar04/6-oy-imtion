import axios from 'axios';
import  { useEffect, useState } from 'react';

const useFetch = (path) => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
    
        async function getData(){
            try {
                const response = await axios.get(`https://ecommerce-backend-fawn-eight.vercel.app/api/${path}`)
                setCards(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getData()
    }, [path]);
    return cards
}

export default useFetch;
