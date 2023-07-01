import React from "react";
import "./style.css";

const ExpenseItem = ({ id, title, date, price, getId }) => {
  const myDate = date.toLocaleString().split("/");
  const month = myDate[0];
  const day = +myDate[1] + 1;
  const year = myDate[2].slice(0, 4);
  //   console.log(myDate)

  //edit
  const editHandler = () => {
    getId(id, "edit");
  };

  //delete
  const deleteHandler = () => {
    getId(id, "delete");
  };

  const styles = {
    marginBottom: 'auto'
  }

  return (
    <li className="expense-item">
      <div className="date">
        <p className="month" style={styles}>{month.length !== 1 ? month : `0${month}`}</p>
        <p className="year" style={styles}>{year}</p>
        <p className="day" style={styles}>{day.length === 1 ? `0${day}` : day}</p>
      </div>
      <h3 className="title">
        {title} &nbsp; Rs: {price}
      </h3>
      <div className="actions">
        <button className="btn btn-primary" onClick={editHandler}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
