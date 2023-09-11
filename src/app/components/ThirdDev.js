import React from 'react';
import Card from './Card';
import NumCard from './NumCard';

const ThirdDev = () => {
  return (
    <div className='bg-greydark-50 grid grid-rows-1 grid-flow-col gap-4 mt-20 p-7'>
      <div className="flex flex-col justify-center items-center"> {/* Center content horizontally and vertically */}
        <h1 className="text-center text-4xl text-black font-bold mb-4">Title Goes Here</h1>
        <p className="text-center p-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className='grid grid-rows-2 grid-cols-2 gap-4'>
      <div className='mt-9'>
<NumCard number={1} />
</div>
<div>
<NumCard number={2} />
</div>
<div className='mt-9'>
<NumCard number={3} />
</div>
<div>
<NumCard number={4} />
</div>
      </div>
      
      {/* CSS Media Query */}
      <style>
        {`
          @media (max-width: 768px) {
            .grid-rows-2 {
              grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));
              row-gap: 10rem; /* Add margin between rows */
            }
            .grid-cols-2 {
              grid-template-columns: repeat(1, 1fr);
              column-gap: 10px; /* Add margin between columns */
            }
          }
        `}
      </style>
    </div>
  );
}

export default ThirdDev;


{/* <div className='mt-9'>
<NumCard number={1} />
</div>
<div>
<NumCard number={2} />
</div>
<div className='mt-9'>
<NumCard number={3} />
</div>
<div>
<NumCard number={4} />
</div> */}
