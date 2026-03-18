import React from 'react';

const ResolvedCard = ({task}) => {
    // console.log(TaskStatusAdd)
    return (


  <div className='space-y-2.5 my-3  p-4  rounded-2xl bg-[#e6f8ea]'>
      <h1 className='font-medium text-[18px]'>{task.title}</h1>
      <div className='flex justify-between text-sm text-gray-600'>
        <p className='text-[#02A53B] text-base font-semibold'>✔ Completed</p>
        <p className="cursor-pointer hover:text-red-500 text-base font-semibold">Click to remove</p>
      </div>
    </div>



        //  <div className='space-y-2.5 my-3 shadow-xl/30  p-4 border-1 rounded-2xl '>

        //            {/* {/* { */}
        //             TaskStatusAdd.map(taskAdd =>  <div className='bg-[#e6f8ea] p-2 rounded-2xl'>
        //                 <h1 className='font-medium text-[18px]'>{taskAdd.title}</h1>
        //                 <div className='flex justify-between'>
        //                     <p>✔ Completed</p>
        //                     <p>Click to remove</p>
        //                 </div>
        //             </div>)
        //            } */}

        //         </div>
    );
};

export default ResolvedCard;