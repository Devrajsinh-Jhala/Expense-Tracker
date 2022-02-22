import React, { useState } from "react";
import "./topfold.css";
import {
  AiOutlineSearch,
  AiFillPlusCircle,
  AiFillCaretLeft,
} from "react-icons/ai";
import { HiXCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

const TopFold = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    // console.log(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchBar">
            <div className="search-icon">
              <AiOutlineSearch />
            </div>
            <input
              type="text"
              value={query}
              placeholder="Search for Expenses &#8594;"
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to={"/add-expense"}>
            <div className="add-button">
              <div className="add-icon">
                <AiFillPlusCircle />
              </div>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to={"/"}>
            {" "}
            <div className="add-topfold-button">
              <div className="add-topfold-icon">
                <AiFillCaretLeft />
              </div>
              <label>Back</label>
            </div>
          </Link>

          <Link to={"/"}>
            {" "}
            <div className="add-topfold-button">
              <div className="add-topfold-icon">
                <HiXCircle />
              </div>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TopFold;
