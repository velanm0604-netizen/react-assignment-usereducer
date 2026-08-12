import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Question1 from "./components/Question1/question1";
import Question2 from "./components/Question2/question2";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1>React useReducer Questions</h1>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/question1">Q1 - Form</Link>
          <Link to="/question2">Q2 - Calculator</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/question1" element={<Question1 />} />
          <Route path="/question2" element={<Question2 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <section className="card">
      <h2>useReducer Practice</h2>
      <p>Select a question from the navigation bar.</p>
      <ol>
        <li><Link to="/question1">Form using useReducer</Link></li>
        <li><Link to="/question2">Calculator using useReducer</Link></li>
      </ol>
    </section>
  );
}

export default App;
