import React from "react";

const Form = () => {
  return (
    <>
      <form className=" my-10 bg-[#F5EEE6] p-10 rounded-md">

        <div className=" flex justify-between gap-5">
          <div className=" flex flex-col gap-1">
            <label
              htmlFor="title"
              className=" text-[#030637] text-xl font-medium"
            >
              Title
            </label>
            <input
              type="text"
              name="titel"
              placeholder="Enter Title"
              className="border-2 px-3 text-lg rounded-md py-1"
            />
          </div>
          <div className=" flex flex-col justify-end">
            <select
              name="priority"
              id=""
              className="border-2 px-3 text-lg rounded-md py-1 "
            >
              <option>Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="hign">Hign</option>
            </select>
          </div>
        </div>
        {/* Details */}
        <div className=" flex flex-col gap-1 my-4">
          <label
            htmlFor="details"
            className=" text-[#030637] text-xl font-medium"
          >
            Details
          </label>
          <textarea
            type="text"
            name="details"
            placeholder="Task details"
            className="border-2 px-3 text-lg rounded-md py-1"
          />
        </div>
        <div className=" flex justify-end">
        <button type="submit" className="btn bg-[#E6A4B4]">Add</button>
        </div>
      </form>
    </>
  );
};

export default Form;
