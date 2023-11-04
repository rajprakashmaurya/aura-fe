import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DataTable from "./components/DataTable";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import TakePhoto from "./components/TakePhoto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
