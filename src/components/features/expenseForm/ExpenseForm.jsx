import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "toastify-js";
import './style.css'



const ExpenseForm = ({ getExpenseData, editExpense }) => {
  const [expData, setExpData] = useState({
    title: "",
    price: "",
    date: "",
  });

  const onChangeValues = (e) => {
    setExpData({ ...expData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    e.preventDefault();
if(expData.title === "" || expData.price === "" || expData.date === "") {
 
  alert('you must fill the data')
}else {

  const data = {
    ...expData,
    id: editExpense !== null ? editExpense.id : Math.floor(Math.random() * 1000),
    date: new Date(expData.date),
    
  };
  if (editExpense !== null) {
    getExpenseData(data, "edit");
  } else {
    getExpenseData(data, "add");
  }

  setExpData({
    title: "",
    price: "",
    date: "",
  });
};
}

  useEffect(() => {
    if (editExpense !== null) {
      // console.log('hi edit data in me', editExpense)
      const year = editExpense.date.getFullYear();
      const month = ("0" + (editExpense.date.getMonth() + 1)).slice(-2);
      const day = editExpense.date.toLocaleString("en-US", { day: "2-digit" });

      // console.log(year)
      // console.log(datee)
      setExpData({
        title: editExpense.title,
        price: editExpense.price,
        date: `${year}-${month}-${day}`,
      });
     
    }
  }, [editExpense]);
  return (
    <div>
       
      <div className="form">
        <form onSubmit={submitData}>
          <div className="mb-3">
            <label htmlFor="expTitle" className="form-label">
              Add Expense
            </label>
            <input
            placeholder="add expenses"
              type="text"
              name="title"
              value={expData.title}
              className="form-control"
              id="expTitle"
              onChange={onChangeValues}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="expPrice" className="form-label">
              Enter Price of expense
            </label>
            <input
            placeholder="enter price"
              type="number"
              name="price"
              className="form-control"
              id="expPrice"
              value={expData.price}
              onChange={onChangeValues}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="expDate" className="form-label">
              Enter Date
            </label>
            <input
              type="date"
              className="form-control"
              id="expDate"
              name="date"
              value={expData.date}
              onChange={onChangeValues}
            />
          </div>

          <div className="text-end">
            <button
              type="submit"
              className="btn btn-primary btn-lg add-expense-btn"
            >
              {editExpense !== null ? `Edit` : `Add`} expense
            </button>
            {/* <ToastContainer /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
