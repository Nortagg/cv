import { Routes, Route } from "react-router-dom";
import "./App.css";
import CardAbout from "./Components/container-about/container-about";
import CardProfile from "./Components/container-profile/container-profile";
import HomePage from "./Components/home/home-page";
import Header from "./Components/Header/header.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/Profile" element={<CardProfile />} />
        <Route path="/About" element={<CardAbout />} />
      </Routes>
    </div>
  );
}

export default App;
