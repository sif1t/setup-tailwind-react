// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('/public/prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))

    }, [])
    return (
        <div  className='mx-12 my-8'>
            <h2 className='text-4xl bg-purple-300 text-purple-800 text-center p-2 mb-3'>Awesome prices </h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
            {
                    prices.map(price => <PriceCard
                        key={price.id} // Add the key prop here
                        price={price}
                    />)
                }
            </div>
        </div>
    );
};

export default PriceList;