import React, { useState } from "react";
import "./add-form.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPaperPlane } from "react-icons/fa";
import { categories } from "../../constants/add-expense";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./success-modal";

const AddForm = () => {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }

    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Don't leave important things blank 😊");
      notify();
      return;
    } else {
      const data = {
        title,
        amount,
        category,
        createdAt: new Date(),
      };

      dispatch(addExpense(data));
      setIsModalOpen(true);
    }
  };
  return (
    <div className="add-form">
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

      <SuccessModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <div className="form-item">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter Name of your Expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          type="text"
          placeholder="Enter the amount that you spent"
          value={amount}
          onChange={(e) => handleAmount(e)}
          className="amount-input"
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "Category"}</label>
            <RiArrowDropDownLine />
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{
                    borderRight: `5px solid ${category.color}`,
                  }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={() => handleSubmit()}>
          Add
          <FaPaperPlane
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "6px",
              marginTop: "2px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddForm;
