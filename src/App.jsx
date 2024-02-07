import { NavLink, Outlet } from "react-router-dom";
import Navbar from "./common/navbar/Navbar";
import { GoHome } from "react-icons/go";
import { AiFillFileText, AiTwotoneWallet, } from "react-icons/ai";
import { FaPenNib } from "react-icons/fa";

import Navlinks from "./common/navlinks/Navlinks";


function App() {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col bg-[#fcfcfc]">
        {/* Page content here */}
        <Navbar/>
        <div className=" md:hidden my-3">
          <Navlinks/>
        </div>
        <Outlet/>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        > </label>
        <ul className="menu p-4 w-80 min-h-full bg-[#030637] text-base-100">
          {/* Sidebar content here */}
          <li className="flex flex-row items-center"><img src="/public/logo.png" alt=""  className="w-20 "/><h4 className=" text-2xl font-bold">VELOCI</h4></li>
          <li>
            <NavLink to={'/'}><GoHome className=" text-2xl font-bold"/><span className=" text-md font-semibold">Dashboard</span></NavLink>
          </li>
          <li>
            <NavLink to={'/stock'}><FaPenNib  className=" text-2xl font-bold"/><span className=" text-md font-semibold">Add ToDo</span></NavLink>
          </li>
          <li>
            <NavLink to={'/orders'}><AiFillFileText className=" text-2xl font-bold"/><span className=" text-md font-semibold">OnGoing</span></NavLink>
          </li>
          <li>
            <NavLink to={'/stock'}><AiTwotoneWallet  className=" text-2xl font-bold"/><span className=" text-md font-semibold">Completed</span></NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default App;
