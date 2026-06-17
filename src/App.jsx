import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import Login from "../src/pages/Login";
import Result from "../src/pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;