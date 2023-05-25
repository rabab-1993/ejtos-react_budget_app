import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="form-floating">
      <select
        className="form-select alert alert-warning"
        name="currency"
        id="floatingSelect"
        // onChange={(e) => console.log(e.target.value)}
        onChange={(e) =>
          dispatch({
            type: "CHG_CURRENCY",
            payload: e.target.value,
          })
        }
      >
        <option>Choose Currency</option>
        <option value="$">$ Dollar</option>
        <option value="£">£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
      <label htmlFor="floatingSelect" className="">
        Currency:
      </label>
    </div>
  );
};

export default Currency;
