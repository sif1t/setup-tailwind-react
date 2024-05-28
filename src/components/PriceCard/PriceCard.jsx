import React from 'react';
import Feature from '../Feature/Feature';
import { Button } from "keep-react";

const PriceCard = ({price}) => {
    return (
        <div className='font-semibold bg-gradient-to-t from-purple-300 to-gray-400 rounded-md p-4 flex flex-col'>
            <h2 className='text-center my-2'>
                <span className='text-purple-800 text-2xl font-bold'>${price.price}</span>
                <span className='text-purple-600 text-lg font-bold'>/month</span>
            </h2>
           <h4 className='text-2xl font-bold text-center'> {price.name}</h4>
           <p className='font-medium text-white  underline'>Features:  </p>
           {
               price.features.map((feature, idx) => <Feature
               key={idx}
                feature={feature}
               ></Feature>)
           }
              <Button
                className='bg-gradient-to-r from-purple-300 to-purple-600 shadow-blue-700/50 text-white font-bold rounded-md p-2 w-full mt-auto'>Buy Now</Button>

        </div>
    );
};

export default PriceCard; 