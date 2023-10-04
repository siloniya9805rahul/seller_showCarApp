import "./App.css";
import Footer from "./componnets/footer/Footer";
import Navbar from "./componnets/navbar/Navbar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App ms-5 me-5">
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
