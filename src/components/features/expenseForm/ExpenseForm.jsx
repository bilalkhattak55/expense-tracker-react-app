import React, { useState } from "react";

const ExpenseForm = ({getExpenseData}) => {
    const [expData, setExpData] = useState({
        title:"",
        price:"",
        date: ""
    })

    const onChangeValues =(e)=> {
        setExpData({...expData, [e.target.name] : e.target.value})
    }
    
    const submitData =(e)=> {
        e.preventDefault()

        const data = {
            id: Math.floor(Math.random() * 1000),
            title: expData.title,
            date: new Date(expData.date),
            price: expData.price
        };

        getExpenseData(data)

        setExpData({
            title:"",
        price:"",
        date: ""

        })
    }
  return (
    <div>
      <div className="form">
        <form onSubmit={submitData}> 
          <div className="mb-3">
            <label htmlFor="expTitle" className="form-label">
              Add Expense
            </label>
            <input
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
              type="number"
              name='price'
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
              name='date'
              value={expData.date}
              onChange={onChangeValues}
            />
          </div>
          
          <div className="text-end">
            <button type="submit" className="btn btn-primary btn-lg add-expense-btn">
            Add expense
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
