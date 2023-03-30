import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomeLeft from "./Components/container-left/container-left";
import HomeRight from "./Components/container-right/container-right";
import HomePage from "./Components/home/home-page";
import Header from "./Components/Header/header.component";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/homeright" element={<HomeRight />} />
        <Route path="/homeleft" element={<HomeLeft />} />
      </Routes>
    </div>
  );
}

export default App;
