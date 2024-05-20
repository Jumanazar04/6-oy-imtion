import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [rate, setRate] = useState('');
    const [price, setPrice] = useState('');
    const [size, setSize] = useState('');
    const [color, setColor] = useState('');

    const navigate = useNavigate()

    const token = localStorage.getItem("auth-token")

    async function handleSubmit(){
        try {
            const data = {
                title: title,
                subtitle: subtitle,
                image: image,
                description: description,
                rate: rate,
                price: price,
                size: size,
                color: color
            }
            const headers = {
                "Content-Type": 'application/json',
                Authorization: token,
            }
            const response = await axios.post("https://ecommerce-backend-fawn-eight.vercel.app/api/products", 
                data,
            {
                headers: headers
            }
            )
            navigate('/client')
            console.log(response);
        } catch (error) {
            console.log("Xatolik", error);
        }
    }
    return (
        <div className='container'>
            <form  action="#" className='w-2/3 h-auto flex flex-col gap-3 border mx-auto p-6 my-8'>
                <h1 className='text-3xl font-bold text-center'>Post categories</h1>
                <label htmlFor="title">
                    Product title: <br />
                    <input 
                        id='title'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" />
                </label>
                <label htmlFor="subtitle">
                    Product subtitle: <br />
                    <input 
                        id='subtitle'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        type="text" />
                </label>
                <label htmlFor="image">
                    Product image: <br />
                    <input 
                        id='image'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        type="text" />
                </label>
                <label htmlFor="description">
                    Product description: <br />
                    <input 
                        id='description'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" />
                </label>
                <label htmlFor="rate">
                    Product rate: <br />
                    <input 
                        id='rate'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        type="number" />
                </label>
                <label htmlFor="price">
                    Product price: <br />
                    <input 
                        id='price'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        type="text" />
                </label>
                <label htmlFor="size">
                    Product size: <br />
                    <input 
                        id='size'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        type="text" />
                </label>
                <label htmlFor="color">
                    Product color: <br />
                    <input 
                        id='color'
                        className='p-2 border bg-gray-100 rounded-lg w-1/2'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        type="text" />
                </label>
                <button className='py-2 border rounded-lg bg-blue-600 text-white' type='button' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
}

export default Admin;
