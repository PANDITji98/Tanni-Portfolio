import { BrowserRouter, Route, Routes } from "react-router-dom";
import BreifProjects from "./pages/BreifProjects";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/aboutProjects" element={<BreifProjects />} exact/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
