import React, { useState, useEffect} from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, setPhones] = useState([])
    useEffect(() => {
        // fetch('http://localhost:3001/phones')
        //     .then(response => response.json())
        //     .then(data => setPhones(data));
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
         .then(data => {
            const loadedData = data.data.data;
            console.log(loadedData);
            const phonesData = loadedData.map = (phone =>{
                 const parts = phone.slug.split('-');
                 const price = parseInt(parts[1]);
                 const phoneInfo = {
                        name: phone.phone_name,
                        price: price,
                 }
                return phoneInfo;
            })
            console.log(phonesData); 
            setPhones(phonesData);
         });
    }, []);
    return (
        <div>  
          <BarChart width={1000} height={300} data={phones}>
            <Bar dataKey='price' fill='#8884d8' />
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
           </BarChart>
        </div>
    );
};
export default PhoneBar; 