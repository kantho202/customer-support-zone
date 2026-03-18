import React from 'react';
import ResolvedCard from '../ResolvedCard/ResolvedCard';

const ResolvedTask = ({ resolved }) => {
    // console.log(resolved)
    return (

        <div className='shadow-xl/30 p-2.5 rounded-2xl mt-5'>
            <h1 className='font-semibold text-[16px] pb-3'> Resolved Task </h1>
            {
                resolved.length === 0
                    ? <p className="text-sm text-gray-500">No tasks completed yet</p>
                    : resolved.map(task => <ResolvedCard key={task.id} task={task} />)
            }
            {/* <ResolvedCard TaskStatusAdd={TaskStatusAdd}></ResolvedCard> */}
        </div>
    );
};

export default ResolvedTask;