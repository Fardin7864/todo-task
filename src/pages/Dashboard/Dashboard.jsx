import { useEffect, useState } from "react";
import { getFromLocalStorage, removeFromLocalStorage } from "../../localstorage/locaStorage";

const Dashboard = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    setTasks(getFromLocalStorage());
  }, []);
  const handleDelete = (id) => { 
   const res = removeFromLocalStorage(id);

   if (res) {
    console.log(res)
   }

   }
  console.log(tasks);
//   tasks.map((task) => { console.log(task.title) })
  return (
    <div className=" grid lg:grid-cols-5 grid-cols-1 gap-3 px-4">
      {tasks?.map((task) => 
        <div key={task.id} className={task.priority === 'low' ? ` p-3 card bg-blue-400 text-gray-950` : task.priority === 'medium' ? ` p-3 card bg-yellow-400 text-gray-950` : ` p-3 card bg-red-400 text-gray-950`}>
          <div className="">
            <h2 className=" text-xl text-center">{task.title.charAt(0).toUpperCase() + task.title.slice(1)}</h2>
            <hr className=" text-gray-500 my-2"/>
            <p className=" text-base text-gray-800 mb-7">{task.details.charAt(0).toUpperCase() + task.details.slice(1)}</p>
            <div className="flex justify-between w-full">
              <button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-warning ">Delete</button>
              <button className="btn btn-sm btn-primary ">Complete</button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Dashboard;
