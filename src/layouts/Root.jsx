import { Outlet } from "react-router";
import Navbar from "../components/Nav/Navbar";
import Hero from "../components/hero/Hero";
import "../layouts/root.css"
const Root = () => {
  return (
    <div>
      <div className="">
        <div id="hero-bg" className=" text-white">
          <Navbar />
          <Hero />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
