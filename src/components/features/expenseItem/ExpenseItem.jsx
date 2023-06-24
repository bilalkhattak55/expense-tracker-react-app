import React from 'react';
import "./style.css"

const ExpenseItem = ({key, id, title, date, price, }) => {
   const myDate = date.toLocaleString().split('/')
   const month = myDate[0];
  const day = myDate[1];
  const year = myDate[2].slice(0, 4);
//   console.log(myDate)
    
    
  return (
    <li className='expense-item'>
       <div className='date'>
        <p className='month'>{month.length !== 1 ? month : `0${month}`}</p>     
        <p className='year'>{year}</p>
        <p className='day'>{day.length === 1 ? `0${day}` : day}</p>
       
      </div>
      <h3 className='title'>
        {title} &nbsp; - &nbsp; ${price}
      </h3>
      <div className='actions'>
        <button className='btn btn-primary' > 
          Edit
        </button>
        <button className='btn btn-primary'>Delete</button>
      </div>

    </li>
  )
}

export default ExpenseItem;
