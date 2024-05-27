import React from 'react';

const PriceCard = ({price}) => {
    return (
        <div className='font-semibold bg-gradient-to-t from-purple-300 to-gray-400 rounded-md p-4'>
            <h2 className='text-center my-2'>
                <span className='text-purple-800 text-2xl font-bold'>${price.price}</span>
                <span className='text-purple-600 text-lg font-bold'>/month</span>
            </h2>
           <h4 className='text-2xl font-bold text-center'> {price.name}</h4>
        </div>
    );
};

export default PriceCard; 