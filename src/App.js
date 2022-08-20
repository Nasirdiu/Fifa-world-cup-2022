import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Pages/Home/Banner/Banner";
import Home from "./Pages/Home/Home/Home";
import LiveStream from "./Pages/Home/LiveStream/LiveStream";
import Studium from "./Pages/Home/Studium/Studium";
import Login from "./Pages/Login/Login";
import PointTable from "./Pages/PointTable/PointTable";

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
