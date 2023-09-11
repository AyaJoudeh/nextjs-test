import React from 'react';

const NumCard = ({ number }) => {
    return (
        <div className="relative bg-white rounded-lg shadow-md p-5 mt-4" style={{ width: '15rem', height: '15rem' }}>
            <div className="absolute top-0 right-0 text-grey rounded-full p-2 text-3xl text-greydark-100">
               {number}
            </div>

            <p className="text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing .
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>
    );
}

export default NumCard;
