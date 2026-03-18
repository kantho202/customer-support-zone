import React from 'react';
import { toast } from 'react-toastify';

const CustomerCard = ({ customer, handleCustomerTicketCount, setTaskStatusAdd, TaskStatusAdd }) => {

    const handleCustomerBox = () => {
        // console.log('connected')
        //  console.log(handleCustomerTicketCount)
        handleCustomerTicketCount(customer)
        setTaskStatusAdd([...TaskStatusAdd, customer])
        toast.success('In progress')
       
       

    }
    return (
        <div onClick={handleCustomerBox} className='p-8 shadow-xl/30 space-y-2.5 rounded-2xl cursor-pointer'>
            <div className='flex items-center justify-between'>
                <h1 className='font-medium text-[18px] '>{customer.title}</h1>
                <button className='font-medium text-base btn rounded-[50px] py-0 bg-[#B9F8CF] text-[#0B5E06] flex items-center border-none'> 
                    <span className='p-2 bg-[#02A53B] rounded-[50px]'></span >{customer.status}</button>
            </div>
            <p className='text-base font-normal text-[#627382]'>{customer.description}</p>
            <div className='flex justify-between text-[#627382]'>
                <div >
                    <p >#<span >{customer.id}</span>

                        {/* <span className='ml-2.5'>{customer.priority}</span> */}
                        <span
                            className={`ml-2.5 px-2 py-0.5 rounded-md text-sm font-medium
      ${customer.priority === "HIGH PRIORITY" ? " text-red-600" : ""}
      ${customer.priority === "MEDIUM PRIORITY" ? " text-yellow-400" : ""}
      ${customer.priority === "LOW PRIORITY" ? " text-green-600" : ""}
    `}
                        >
                            {customer.priority}
                        </span>

                    </p>
                </div>
                <div>
                    <p >   <span className='mr-2.5'>{customer.customer}</span> {customer.date}</p>
                </div>

            </div>
        </div>
    );
};

export default CustomerCard;