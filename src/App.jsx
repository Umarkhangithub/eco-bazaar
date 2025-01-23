import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
