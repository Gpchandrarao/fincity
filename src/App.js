import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./components/Home";
import "./App.css";
import AddProject from "./components/AddProject";
import Nav from "./components/Nav";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/addproject" element={<AddProject />} />
    </Routes>
  </BrowserRouter>
);

export default App;
