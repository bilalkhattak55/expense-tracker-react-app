import React from "react";

const ExpenseFilter = ({year, getYear, filterByYear}) => {
  console.log("filterByYear.length",filterByYear.length)
  const handleChange = (e) => {
    getYear(e.target.value);
  };

  const styles = {
    width: '250px',
    backgroundColor: filterByYear.length === 0 ? 'red':'#0d6efd',
    // marginRight:'0',
    // marginTop: '40px',
    height: '4rem',
    fontSize: '1.2rem',
    outline: 'none',
    border: '0',
    fontWeight: '600',
    color: '#fff',
    margin: '0'
   
    
  }
  return (
    <>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginTop:'2rem' }}>
      <select style={styles} onChange={handleChange} value={year} className="form-select" aria-label="Default select example">
        <option value='all'>All</option>
        <option value='2023'>2023</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
      </select>
      </div>
    </>
  );
};

export default ExpenseFilter;
