import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import NotFound from "./pages/404/404NotFound";
import Task from "./pages/task/Task";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/task/:id?" element={<Task />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
