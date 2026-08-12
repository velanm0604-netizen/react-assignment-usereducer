import { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  password: "",
  college: "",
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Question1() {
  const [form, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (event) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: event.target.name,
      value: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  return (
    <section className="card">
      <h2>Question 1 - Form using useReducer</h2>
      <p>
        Enter Name, Age, Password, and College Name. The form state is managed
        with <code>useReducer()</code>.
      </p>

      <form className="form" onSubmit={handleSubmit}>
        <label className="field">
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </label>

        <label className="field">
          Age
          <input
            name="age"
            type="number"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </label>

        <label className="field">
          Password
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </label>

        <label className="field">
          College Name
          <input
            name="college"
            value={form.college}
            onChange={handleChange}
            placeholder="Enter college name"
          />
        </label>

        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button
            className="btn"
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Clear
          </button>
        </div>
      </form>

      <div className="preview">
        <h3>Collected Information</h3>
        <p><strong>Name:</strong> {form.name || "—"}</p>
        <p><strong>Age:</strong> {form.age || "—"}</p>
        <p><strong>Password:</strong> {form.password ? "••••••••" : "—"}</p>
        <p><strong>College:</strong> {form.college || "—"}</p>
      </div>
    </section>
  );
}

export default Question1;
