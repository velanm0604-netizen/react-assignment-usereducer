import { useReducer } from "react";

const initialState = {
  value1: "",
  value2: "",
  operation: "add",
  result: "",
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case "SET_VALUE1":
      return {
        ...state,
        value1: action.value,
      };

    case "SET_VALUE2":
      return {
        ...state,
        value2: action.value,
      };

    case "CALCULATE": {
      const first = Number(state.value1);
      const second = Number(state.value2);
      let result;

      switch (state.operation) {
        case "add":
          result = first + second;
          break;
        case "sub":
          result = first - second;
          break;
        case "mult":
          result = first * second;
          break;
        case "division":
          result = second === 0 ? "Cannot divide by zero" : first / second;
          break;
        default:
          result = "";
      }

      return {
        ...state,
        result,
      };
    }

    case "SET_OPERATION":
      return {
        ...state,
        operation: action.value,
        result: "",
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Question2() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const calculate = (operation) => {
    dispatch({ type: "SET_OPERATION", value: operation });
    dispatch({ type: "CALCULATE" });
  };

  return (
    <section className="card">
      <h2>Question 2 - Calculator using useReducer</h2>
      <p>
        Perform addition, subtraction, multiplication, and division using two
        input values and <code>useReducer()</code>.
      </p>

      <div className="calculator">
        <div className="inputs">
          <label className="field">
            Value 1
            <input
              type="number"
              value={state.value1}
              onChange={(event) =>
                dispatch({
                  type: "SET_VALUE1",
                  value: event.target.value,
                })
              }
              placeholder="Enter value 1"
            />
          </label>

          <label className="field">
            Value 2
            <input
              type="number"
              value={state.value2}
              onChange={(event) =>
                dispatch({
                  type: "SET_VALUE2",
                  value: event.target.value,
                })
              }
              placeholder="Enter value 2"
            />
          </label>
        </div>

        <label className="field">
          Operation
          <select
            value={state.operation}
            onChange={(event) =>
              dispatch({
                type: "SET_OPERATION",
                value: event.target.value,
              })
            }
          >
            <option value="add">Add (+)</option>
            <option value="sub">Subtract (-)</option>
            <option value="mult">Multiply (×)</option>
            <option value="division">Division (÷)</option>
          </select>
        </label>

        <div className="operations">
          <button className="btn" onClick={() => calculate("add")}>
            Add
          </button>
          <button className="btn" onClick={() => calculate("sub")}>
            Sub
          </button>
          <button className="btn" onClick={() => calculate("mult")}>
            Mult
          </button>
          <button className="btn" onClick={() => calculate("division")}>
            Division
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Clear
          </button>
        </div>

        <div className="result">
          Result: {state.result === "" ? "—" : state.result}
        </div>
      </div>
    </section>
  );
}

export default Question2;
