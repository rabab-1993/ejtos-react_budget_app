import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { budget,currency, dispatch } = useContext(AppContext);
  //   const [newBudget, setNewBudget] = useState(budget);
  //   let handelChange = (e) => {
  //     setNewBudget(e);
  //     console.log(e);
  //     dispatch({
  //       type: "SET_BUDGET",
  //       payload: newBudget,
  //       //   payload: newBudget ++ 10 | newBudget -- 10 ,
  //     });
  //   };
  return (
    <div className="alert alert-secondary">
      <span>
        Budget: {currency}
        <input
          type="number"
          step="10"
          name="budget"
          id="budget"
          value={budget}
          onChange={(e) =>
            dispatch({
              type: "SET_BUDGET",
              payload: e.target.value,
            })
          }
          //   onChange={(e) => handelChange(e.target.value)}
        />
      </span>
    </div>
  );
};
export default Budget;
