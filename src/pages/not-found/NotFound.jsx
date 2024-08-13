import React from "react";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="flex mr-auto flex-col gap-6 items-center mb-4">
        <img className="-mt-28 w-full" src="https://cdn.dribbble.com/users/1818132/screenshots/4264991/media/c10fe2449e4861c155585ddf525e670b.gif" alt="" />
        <div>
          <button
            onClick={() => navigate("/")}
            className="p-3 bg-gray-300 mx-2 rounded-lg cursor-pointer"
          >
            Goo Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="p-3 bg-gray-300 mx-2 rounded-lg cursor-pointer"
          >
            Goo Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
