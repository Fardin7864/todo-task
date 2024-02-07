import { useEffect, useState } from "react";
import { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage } from "../../localstorage/locaStorage";
import Swal from "sweetalert2";

const Dashboard = () => {
  const [tasks, setTasks] = useState();
  const [render, setRender] = useState(1)

  useEffect(() => {
    setTasks(getFromLocalStorage());
  }, [render]);

  // Delete function
  const handleDelete = (id) => { 
// Confirm before delete
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
        setRender(render + 1)
      Swal.fire({
        title: "Deleted!",
        text: "Your todo has been deleted.",
        icon: "success"
      });
    }
  });

   }

   //complete function
   const handleComplete = (task) => { 
    //check status
    if (task.status === 'completed') {
        return Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Already completed!",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const updatedTask = {
        id: new Date().getTime(),
        title: task.title,
        details: task.details,
        priority: task.priority,
        status: 'completed'
    }
    const res = addToLocalStorage(updatedTask);
    // console.log(res)
    if(res){
        removeFromLocalStorage(task.id);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Completed the todo successfully!",
            showConfirmButton: false,
            timer: 1500
          });
          setRender(render + 1)
    }
    }
//   console.log(tasks);
//   tasks.map((task) => { console.log(task.title) })
  return (
    <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 px-4 my-7">
      {tasks?.map((task) => 
        <div key={task.id} className={task.priority === 'low' ? ` card bg-blue-400 text-gray-950` : task.priority === 'medium' ? ` card bg-yellow-400 text-gray-950` : ` card bg-red-400 text-gray-950`}>
          <div className=" px-4 py-5">
            <h2 className=" text-xl text-center font-semibold">{task.title.charAt(0).toUpperCase() + task.title.slice(1)}</h2>
            <p className=" text-center text-xs">Status: <span className={task.status === 'complete'? 'text-green-700': 'text-red-700 font-semibold' }>{task.status?.toUpperCase()}</span></p>
            <hr className=" text-gray-500 my-2"/>
            <p className=" text-base text-gray-800 mb-7 text-justify">{task.details.charAt(0).toUpperCase() + task.details.slice(1)}</p>
            <div className="flex justify-between w-full">
              <button onClick={() => handleDelete(task.id)} className="btn btn-sm btn-warning ">Delete</button>
              <button onClick={()=> handleComplete(task)} className="btn btn-sm btn-primary ">Complete</button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Dashboard;
