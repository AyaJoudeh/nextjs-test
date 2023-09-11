import React from 'react';
import Card from './Card';
import CardData from './CardData.json';

const SecondDev = () => {
  return (
    <div className='bg-greydark-50 p-10'>
      <h1 className="text-center text-xxl text-black font-bold mb-10 text-4xl">Title Goes Here</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum in voluptate velit esse.</p>

      <div className="flex flex-wrap justify-center">
        {CardData.map((item, index) => {
          return (
            <div className="m-4" key={index}>
              <Card title={item.title} description={item.description} />
            </div>
          );
        })}
      </div>

      <style>
        {`
          .m-4 {
            margin: 3rem;
          }
        `}
      </style>
    </div>
  );
}

export default SecondDev;
