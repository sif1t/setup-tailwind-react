import React, { useState, useEffect} from 'react';
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
         });
    }, []);
    return (
        <div>
            
        </div>
    );
};
export default PhoneBar;