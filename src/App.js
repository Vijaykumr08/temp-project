import "./App.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/home">Home </Link>&nbsp;&nbsp;
        <Link to="/about">About</Link>
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home title="vijay" />} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
