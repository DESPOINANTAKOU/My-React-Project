import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<></>} />
        <Route path="" element={<></>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
