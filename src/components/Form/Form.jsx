import { useState } from "react";
import Swal from "sweetalert2";
import { addToLocalStorage } from "../../localstorage/locaStorage";

const Form = () => {
  const [priority, setPriority] = useState("low");
  const [formData, setFormData] = useState({
    title: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form Data:", formData);
    const task = {
      id: new Date().getTime(),
      title: formData.title,
      details: formData.details,
      priority: priority,
      status: 'incompleted'
    };
    // const addToLocal = addToLocalStorage(task);
    // console.log(addToLocal)
    setFormData({ title: "", details: "" });
    setPriority("low");
    if(!task.title || !task.details){
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Title and Details Required!",
          showConfirmButton: false,
          timer: 1500,
        });
    }else{
        addToLocalStorage(task)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Task added to List!",
            showConfirmButton: false,
            timer: 1500,
          });
    }

  };

  return (
    <>
      <form
        className="my-10 bg-[#F5EEE6] p-10 rounded-md mx-3"
        onSubmit={handleSubmit}
      >
        {/* Title and selection */}
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="title"
              className="text-[#030637] text-xl font-medium"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              className="border-2 px-3 text-lg rounded-md py-1"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-end">
            <label
              htmlFor="priority"
              className="text-[#030637] text-xl font-medium"
            >
              Select Priority
            </label>
            <select
              name="priority"
              className="border-2 px-3 text-lg rounded-md py-1"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col gap-1 my-4">
          <label
            htmlFor="details"
            className="text-[#030637] text-xl font-medium"
          >
            Details
          </label>
          <textarea
            type="text"
            name="details"
            placeholder="Task details"
            className="border-2 px-3 text-lg rounded-md py-1"
            value={formData.details}
            onChange={handleChange}
          />
        </div>
        {/* submit btn */}
        <div className="flex justify-end">
          <button type="submit" className="btn bg-[#E6A4B4]">
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
