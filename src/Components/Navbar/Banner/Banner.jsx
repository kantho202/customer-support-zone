import React from 'react';

const Banner = ({TaskStatusAdd,resolved}) => {
    return (
        <div className=' max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3 my-15  '>
        <div className='box-1 py-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center rounded-[10px]'>
          <h1 className='font-normal text-2xl text-[#FFFFFF]'>In-Progress</h1>
          <span className='text-[60px] font-semibold text-white'>{TaskStatusAdd.length}</span>
        </div>
        <div className=' py-10 bg-gradient-to-r from-[#54CF68] to-[#00827A] text-center rounded-[10px]'>
          <h1 className='font-normal text-2xl text-[#FFFFFF]'>Resolved</h1>
          <span className='text-[60px] font-semibold text-white'>{resolved.length}</span>
        </div>
      </div>
    );
};

export default Banner;