import React from 'react'
import ExpenseItem from '../expenseItem/ExpenseItem'

const ExpenseList = ({expenses}) => {

  return (

    <>
      <ul>
        {
            expenses.map((expense)=> (
                // console.log(expense)
                <ExpenseItem 
                key={expense.id}
                id={expense.id}
                title={expense.title}
                price={expense.price}
                date={expense.date}

                />
            ))
        }
      </ul>
      
    </>
  )
}

export default ExpenseList
