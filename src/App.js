<<<<<<< HEAD
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from "./components/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
=======
import React, { useState } from "react";
import Form from "./components/Form";
import Entries from "./components/Entries";
import Balance from "./components/Balance";
import Pic from "./Heading.svg";
import DoughnutChart from "./components/DoughnutChart";
import NoteSection from "./components/NoteSection";
import TodoSection from "./components/TodoSection";
import "./App.css";

function App() {
  const [transactionList, setTransactionList] = useState([]);
  const [toggle, setToggle] = useState(1);

  const toggleTab = (id) => {
    setToggle(id);
  };

  const amountEntries = transactionList.map((entryItem) =>
    parseInt(entryItem.amount)
  );
  const totalBalance = amountEntries.reduce((prev, curr) => prev + curr, 0);

  const expenseBalance = amountEntries.filter((entryItem) => entryItem < 0);
  const totalExpense = expenseBalance.reduce((prev, curr) => prev + curr, 0);

  const incomeBalance = amountEntries.filter((entryItem) => entryItem >= 0);
  const totalIncome = incomeBalance.reduce((prev, curr) => prev + curr, 0);

  const addTransaction = (newEntry) => {
    setTransactionList((prevValue) => {
      return [...prevValue, newEntry];
    });
  };

  const deleteTransaction = (id) => {
    setTransactionList((prevValue) => {
      return prevValue.filter((entryItem, index) => {
        return index !== id;
      });
    });
  };
  console.log(expenseBalance);

  return (
    <div className="App">
      <div className="journal-tab">
        <div
          className={toggle === 1 ? "active-tab" : "tab"}
          onClick={() => toggleTab(1)}
          style={{backgroundColor: toggle === 1 && "#515190"}}
        >
          <p>Expense Journal</p>
        </div>
        <div
          className={toggle === 2 ? "active-tab" : "tab"}
          onClick={() => toggleTab(2)}
          style={{backgroundColor: toggle === 2 && "#BBD196"}}
        >
          <p>Notes</p>
        </div>
        <div
          className={toggle === 3 ? "active-tab" : "tab"}
          onClick={() => toggleTab(3)}
          style={{backgroundColor: toggle === 3 && "#A2D2FF"}}
        >
          <p>To-Do</p>
        </div>
      </div>
      <div className="journal-content">
        <div className={toggle === 1 ? "active-content expense-container" : "content expense-container"} >
        <div className="container-bg"  style={{backgroundColor: toggle === 1 && "#515190"}}>
          <div className="heading-svg">
            <svg
              width="158"
              height="111"
              viewBox="0 0 158 111"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="-0.138855"
                y="-40"
                width="103.499"
                height="103"
                rx="30"
                transform="rotate(29.5905 -0.138855 -40)"
                fill="#52437B"
                fill-opacity="0.51"
              />
              <rect
                x="75.9323"
                y="69"
                width="30.4641"
                height="27.5501"
                transform="rotate(49.4458 75.9323 69)"
                fill="#FF7A8A"
                fill-opacity="0.51"
              />
              <rect
                x="98.0695"
                y="-12"
                width="68.8035"
                height="68.9948"
                rx="18"
                transform="rotate(29.5905 98.0695 -12)"
                fill="#DBFC94"
                fill-opacity="0.74"
              />
            </svg>
          </div>
          <div className="journal-container">
            {/* <h1>Expense Journal</h1> */}
            <h1 className="title">
              Balance: {totalBalance < 0 && "-"} $
              {Math.abs(totalBalance).toLocaleString()}
            </h1>
            <div className="stat-container">
              <div className="doughnut">
                {transactionList.length > 0 && (
                  <DoughnutChart expense={totalExpense} income={totalIncome} />
                )}
              </div>
              <div
                className={
                  transactionList.length > 0
                    ? "balance-container"
                    : "balance-container-after"
                }
              >
                <Balance
                  balanceHeading="Expense"
                  balanceAmount={totalExpense}
                />
                <Balance balanceHeading="Income" balanceAmount={totalIncome} />
              </div>
            </div>

            <div className="form-container">
              <div className="forms">
                <Form onAdd={addTransaction} />
              </div>
              <div className="entries">
                {/* <h4>Transaction History</h4> */}
                {transactionList.map((entryItem, index) => {
                  return (
                    <Entries
                      key={index}
                      index={index}
                      entry={entryItem.info}
                      amount={entryItem.amount}
                      onDelete={deleteTransaction}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          </div>
        </div>
        {/* <div className="footer-svg">
        <svg
          width="222"
          height="196"
          viewBox="0 0 222 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="119.403"
            height="118.828"
            rx="30"
            transform="matrix(-0.992845 0.119408 0.119408 0.992845 235.058 70.4552)"
            fill="#52437B"
            fill-opacity="0.51"
          />
          <rect
            width="35.1454"
            height="31.7836"
            transform="matrix(-0.893268 0.449525 0.449525 0.893268 105.521 152.523)"
            fill="#FF7A8A"
            fill-opacity="0.51"
          />
          <rect
            width="79.3762"
            height="79.5969"
            rx="18"
            transform="matrix(-0.992845 0.119408 0.119408 0.992845 118.077 56.4661)"
            fill="#DBFC94"
            fill-opacity="0.74"
          />
        </svg>
      </div> */}
      
        <div className={toggle === 2 ? "active-content note-todo-container" : "content note-todo-container"} >
        <div className="container-bg" style={{backgroundColor: toggle === 2 && "#BBD196"}}>
          <NoteSection /></div>
        </div>
        <div className={toggle === 3 ? "active-content note-todo-container" : "content note-todo-container"}>
        <div className="container-bg"  style={{backgroundColor: toggle === 3 && "#A2D2FF"}}>
          <TodoSection /></div>
        </div>
      </div>
>>>>>>> 0b62c111a370c71813abcf017d799906c70fe66a
    </div>
  );
}

export default App;
