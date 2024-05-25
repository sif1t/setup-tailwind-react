// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
   const [prices, setPrices] =  useState([]);
   useEffect (() => {
         fetch('/public/prices.json')
         .then(res => res.json())
         .then(data => setPrices(data))
    
   },[])
    return (
        <div>
            <h2 className='text-4xl bg-purple-300 text-purple-800 text-center p-2'>Awesome prices </h2>
            {
                prices.map (price => <PriceCard
                    key={price.id} // Add the key prop here
                    price={price}
                />)
            }
        </div>
    );
};

export default PriceList;