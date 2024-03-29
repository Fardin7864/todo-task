import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "../../localstorage/locaStorage";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [render, setRender] = useState(1);
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    setTasks(getFromLocalStorage());
  }, [render]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromLocalStorage(id);
        setRender(render + 1);
        Swal.fire({
          title: "Deleted!",
          text: "Your todo has been deleted.",
          icon: "success"
        });
      }
    });
  };

  const handleComplete = (task) => {
    if (task.status === "completed") {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Already completed!",
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      const updatedTask = {
        id: new Date().getTime(),
        title: task.title,
        details: task.details,
        priority: task.priority,
        status: "completed"
      };
      const res = addToLocalStorage(updatedTask);
      if (res) {
        removeFromLocalStorage(task.id);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Completed the todo successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        setRender(render + 1);
      }
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterPriority !== "all" && filterStatus !== "all") {
      return task.priority === filterPriority && task.status === filterStatus;
    } else if (filterPriority !== "all") {
      return task.priority === filterPriority;
    } else if (filterStatus !== "all") {
      return task.status === filterStatus;
    }
    return true;
  });



  // Calculate total tasks and completed tasks
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === "completed").length;




  return (
    <div>
      <div className="flex justify-center my-4">
        <select className="form-select mx-2" onChange={(e) => setFilterPriority(e.target.value)}>
          <option value="all">All Priorities</option>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
        <select className="form-select mx-2" onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="all">All Statuses</option>
          <option value="completed">Completed</option>
          <option value="incompleted">Incomplete</option>
        </select>
      </div>
      <div className=" flex justify-between px-5">
        <h5  className=" text-xl"><span className=" font-semibold text-[#910A67]">Total:</span> {totalTasks}</h5>
        <h5 className=" text-xl"><span className=" font-semibold text-[#910A67]">Completed:</span> {completedTasks}</h5>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 px-4 my-7">
        {filteredTasks.map((task) => (
          <div key={task.id} className={task.priority === "low" ? `card bg-blue-400 text-gray-950` : task.priority === "medium" ? `card bg-yellow-400 text-gray-950` : `card bg-red-400 text-gray-950`}>
            <div className="px-4 py-5 flex flex-col h-full">
              <button disabled={task.status === 'completed'} >
              <Link to={task.status === 'incompleted' && `/edit/${task.id}`} className="absolute right-5">
                <BiEdit className="text-gray-100 hover:text-black active:opacity-30" />
              </Link>
              </button>
              <h2 className="text-xl text-center font-semibold">{task.title.charAt(0).toUpperCase() + task.title.slice(1)}</h2>
              <p className="text-center text-xs">Status: <span className={task.status === "completed" ? "text-green-700" : "text-red-700 font-semibold"}>{task.status?.toUpperCase()}</span></p>
              <hr className="text-gray-500 my-2" />
              <p className="text-base text-gray-800 mb-7 text-justify overflow-hidden flex-grow">{task.details.charAt(0).toUpperCase() + task.details.slice(1)}</p>
              <div className="flex justify-between w-full">
                <button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-warning">Delete</button>
                <button onClick={() => handleComplete(task)} className="btn btn-sm btn-primary">Complete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
