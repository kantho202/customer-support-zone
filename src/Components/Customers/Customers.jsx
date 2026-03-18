import React from 'react';
import { use } from 'react';
import CustomerCard from '../../CustomerCard/CustomerCard';

const Customers = ({ customerPromise,handleCustomerTicketCount,setTaskStatusAdd ,TaskStatusAdd,removeCustomerCard,RemoveCustomerTicket,setRemoveCustomerTicket}) => {
    const customersData = use(customerPromise)
    // console.log(customersData)
    
  
    return (
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>

        {
            customersData.map(customer => <CustomerCard setRemoveCustomerTicket={setRemoveCustomerTicket} emoveCustomerTicket={RemoveCustomerTicket} removeCustomerCard={removeCustomerCard}  TaskStatusAdd={TaskStatusAdd} setTaskStatusAdd={setTaskStatusAdd} handleCustomerTicketCount={handleCustomerTicketCount}
                key={customer.id}
                 customer={customer}></CustomerCard>  )
        }
         
         
      </div>
    );
};

export default Customers;