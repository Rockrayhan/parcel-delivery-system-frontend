import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar/>
      <div className="grow-1"><Outlet /></div>
      <Footer/>
    </div>
  );
}

export default App;
