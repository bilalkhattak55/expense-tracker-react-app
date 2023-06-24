import React, { useState } from 'react'
import Main from '../../components/ui/main/Main';
import ExpenseFilter from '../../components/features/expenseFilter/ExpenseFilter';
import ExpenseForm from '../../components/features/expenseForm/ExpenseForm';
import ExpenseList from '../../components/features/expenseList/ExpenseList';

const expenseArray = [
  {
    id: 1,
    title: "wathcing movie in cinema",
    price: 1000,
    date: new Date("2021-02-10")
  },
  {
    id: 2,
    title: "buy new laptop",
    price: 40000,
    date: new Date("2022-11-11")
  },
  {
    id: 1,
    title: "Mobile",
    price: 30000,
    date: new Date("2010-04-05")
  },
  {
    id: 1,
    title: "home applinces",
    price: 50000,
    date: new Date("2023-05-02")
  }
]
const Home = () => {


  const [expenseListArray, setExpenseListArray] = useState(expenseArray)
  const [expenseListArr, setEditExpenseListArray] = useState(expenseArray)

  const getExpenseDataHandler =(data)=> {
    console.log(data)
    setExpenseListArray([data, ...expenseListArray])
  }

  return (
    <Main>
      <ExpenseForm getExpenseData={getExpenseDataHandler} />
      <ExpenseFilter />
      <ExpenseList expenses={expenseListArray} />

    </Main>
  )
}

export default Home;
