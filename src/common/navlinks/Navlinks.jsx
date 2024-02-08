import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const Navlinks = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setCurrentTime(new Date());
  }

  return (
    <ul className="flex gap-1 justify-center md:gap-3 ">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "shadow-md p-2 rounded-lg text-[#910A67]"
              : " text-gray-500 hover:text-[#910A67] hover:shadow-md p-2 rounded-lg"
          }
        >
          <span className=" md:text-md font-semibold text-sm">Dashboard</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/add-todo"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "shadow-md p-2 rounded-lg"
              : "text-gray-500 hover:text-[#910A67] hover:shadow-md p-2 rounded-lg"
          }
        >
          <span className="text-sm md:text-md font-semibold ">
            Add ToDo
          </span>
        </NavLink>
      </li>
      <li>
        <span className="text-sm md:text-md font-semibold ">
         Time: {currentTime.toLocaleTimeString()}
        </span>
      </li>
    </ul>
  );
};

export default Navlinks;
