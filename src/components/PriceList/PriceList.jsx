import React, { useEffect, useState } from 'react';

const PriceList = () => {
   const [prices, setPrices] =  useState([]);
   useEffect (() => {
         fetch('prices.json')
         .then(res => res.json())
         .then(data => setPrices(data))
    
   },[])
    return (
        <div>
            <h2 className='text-4xl bg-purple-300 text-purple-800 text-center p-2'>Awesome prices </h2>
            
        </div>
    );
};

export default PriceList;