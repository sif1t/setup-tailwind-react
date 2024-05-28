import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'



const Feature = (feature) => {
    return (
        <div className='flex items-center'>
             <CheckCircleIcon className="size-6 w-5 h-5 text-purple-400" />
            <span className='text-black text-lg font-bold px-2'>{feature.feature}</span>
        </div>
    );
};

export default Feature;