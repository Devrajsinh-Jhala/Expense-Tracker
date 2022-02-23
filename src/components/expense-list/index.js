import React from "react";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./card";
import "./expense-list.css";

const ExpenseList = () => {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => {
    toast.success("Deleted Successfully");
  };

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card
            item={item}
            notifySuccess={notifySuccess}
            key={item.createdAt}
          />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-image"
          />
          <label>List Empty! Add Expense to Track it!</label>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
