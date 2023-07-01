import React from 'react'
import ExpenseItem from '../expenseItem/ExpenseItem'

const ExpenseList = ({expenses, getId}) => {

  const editHandler =(id, method)=> {
     getId(id, method)
  }
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
                getId={editHandler}

                />
            ))
        }
      </ul>
      
    </>
  )
}

export default ExpenseList
