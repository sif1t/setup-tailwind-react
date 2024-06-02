import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

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
         });
    }, []);
    return (
        <div>  
         
        </div>
    );
};
export default PhoneBar; 