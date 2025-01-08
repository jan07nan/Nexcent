import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Register from "./Components/Signup/Register";
import Login from "./Components/Signup/Signin";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
