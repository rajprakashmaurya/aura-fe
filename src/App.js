import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DataTable from "./components/DataTable";
import Login from "./components/Login";
import Register from "./components/Register";
import TakePhoto from "./components/TakePhoto";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/takePhoto" element={<TakePhoto />} />
          <Route path="/data" element={<DataTable />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
