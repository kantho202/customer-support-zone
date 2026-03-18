import React, { } from 'react';
import ResolvedTask from '../ResolvedTask/ResolvedTask';
import { toast } from 'react-toastify';

const TaskStatus = ({ task, removeTaskCard,removeCustomerCard }) => {
  // console.log(task)
  // const [isCompleted , setIsCompleted] = useState(false)
  const handleRemoved = () => {

    toast.success('Completed!')
    removeTaskCard(task)
    removeCustomerCard(task)
    // setIsCompleted(true)
    // setResolved('df')
  }

  return (
    <div >
      
       
          <div className='space-y-2.5 my-3   p-4 rounded-2xl'>
        
           <h1 className='font-medium text-[18px]'>{task.title}</h1>
           <button onClick={handleRemoved} className='btn w-full bg-[#02A53B] text-white rounded-[5px]'>Complete</button>
         
        </div>
      

      {/* {!isCompleted &&(
            <div className='space-y-2.5 my-3 shadow-xl/30  p-4 rounded-2xl'>
        
           <h1 className='font-medium text-[18px]'>{task.title}</h1>
           <button onClick={handleRemoved} className='btn w-full bg-[#02A53B] text-white rounded-[5px]'>Complete</button>
         
        </div>
        )}
          {
            isCompleted && <ResolvedTask task={task} />
          } */}
    </div>

  );
}



export default TaskStatus;

