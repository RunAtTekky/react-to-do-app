import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
