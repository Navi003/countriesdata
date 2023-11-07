// import React from "react";
import React, { useReducer } from "react";

const userReducer = function (state, action) {
  if (action.type === "region") {
    return { name: null, region: action.val };
  }
  if (action.type === "country") {
    return { name: action.val, region: null };
  }

  if (action.val === "") {
    return { name: null, region: null, all: "all" };
  }
};

export default function FormSearch(props) {
  const [userState, userDispatch] = useReducer(userReducer, {
    name: "",
    region: "",
  });

  const userDataHandler = function (e) {
    userDispatch({ type: "country", val: e.target.value });
  };

  const dropDownChangeHandler = function (e) {
    userDispatch({ type: "region", val: e.target.value });
  };

  props.getEnteredData(userState);

  return (
    <div className="container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.getEnteredData(userState);
        }}
        className="form-search container"
      >
        <div className="from-search__text--box">
          <i className="fa fa-search" aria-hidden="true"></i>
          <input
            // value={userEnteredData}
            onChange={userDataHandler}
            className="form-search__input"
            type="text"
          ></input>
        </div>
        <select
          onChange={dropDownChangeHandler}
          className="form-search__select"
        >
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </form>
    </div>
  );
}
