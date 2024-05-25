import React, { useState } from 'react';

const PriceList = () => {
   const [prices, setPrices] =  useState([]);
    return (
        <div>
            <h2 className='text-4xl bg-purple-300 text-purple-800 text-center p-2'>Awesome prices </h2>
        </div>
    );
};

export default PriceList;