import React, { useState } from "react";
import Main from "../../components/ui/main/Main";
import ExpenseFilter from "../../components/features/expenseFilter/ExpenseFilter";
import ExpenseForm from "../../components/features/expenseForm/ExpenseForm";
import ExpenseList from "../../components/features/expenseList/ExpenseList";



const expenseArray = [
  {
    id: 1,
    title: "wathcing movie in cinema",
    price: 1000,
    date: new Date("2021-02-10"),
  },
  {
    id: 2,
    title: "buy new laptop",
    price: 40000,
    date: new Date("2022-11-11"),
  },
];
const Home = () => {
  const [expenseListArray, setExpenseListArray] = useState(expenseArray);
  // const [expenseListArr, setEditExpenseListArray] = useState(expenseArray)
  const [editExpense, setEditExpense] = useState(null);
  const [year, setYear] = useState('all')

  const getExpenseDataHandler = (data, method) => {
    // console.log(data, method)
    if (method === "add") {
      setExpenseListArray([data, ...expenseListArray]);
    } else if (method === "edit") {
      const editexp = expenseListArray.map((dataa) => {
        console.log("dataa", dataa);
        // console.log("data.id === data.id",dataa.id)
        if (dataa.id === data.id) {
          return {
            id: data.id,
            title: data.title,
            price: data.price,
            date: data.date,
          };
        }
        return dataa;
      });
      setExpenseListArray(editexp);
      setEditExpense(null);
    }
  };

  const getIdHandler = (id, method) => {
    console.log(id, method);
    if (method === "delete") {
      const delExp = expenseListArray.filter((exp) => +exp.id !== +id);
      setExpenseListArray(delExp);
    } else if (method === "edit") {
      // console.log('edit me k')
      const editExp = expenseListArray.filter((exp) => exp.id === +id);
      setEditExpense(editExp[0]);
    }
  };

  //filter by year;
  const yearHandle =(y)=> {
    
    setYear(y)
    
  }



  const filterByYear = expenseListArray.filter((data)=> {
    console.log(year)
    // console.log("data.date.getFullYear()",data.date.getFullYear())
    if(year === 'all') {
      return data;
    }else {
      return +data.date.getFullYear() === +year
    }
  })
  // console.log("editExpense",editExpense)

  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(expenseListArr));
  // }, [expenseListArr]);

  // useEffect(() => {
  //   const storedItems = localStorage.getItem('items');
  //   if (storedItems) {
  //     setExpenseListArray(JSON.parse(storedItems));

  //   }
  // }, []);
  return (
    <Main>
      
      <ExpenseForm
        getExpenseData={getExpenseDataHandler}
        editExpense={editExpense}
      />
      <ExpenseFilter year={year} getYear={yearHandle} filterByYear={filterByYear}  />
      {/* <ExpenseList expenses={year === 'all' ? expenseListArray : filterByYear } getId={getIdHandler} /> */}
      <ExpenseList expenses={filterByYear} getId={getIdHandler} />
    </Main>
  );
};

export default Home;
