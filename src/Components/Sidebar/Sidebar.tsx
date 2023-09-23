import React from "react";
import { NavLink } from "react-router-dom";
type Props = {};

const Sidebar: React.FC = (props: Props) => {
  return (
    <div
      className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] duration-1000
    p-2 w-[300px] overflow-y-auto text-center bg-gray-900 shadow h-screen"
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center rounded-md ">
          <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md" />
          <h1 className="text-[15px]  ml-3 text-xl text-gray-200 font-bold">
             CyberSoft Jira
          </h1>
          <i className="bi bi-x ml-20 cursor-pointer lg:hidden" />
        </div>
        <hr className="my-2 text-gray-600" />
        <div>
          <div
            className="p-2.5 mt-3 flex items-center rounded-md 
  px-4 duration-300 cursor-pointer  bg-gray-700"
          >
            <i className="bi bi-search text-sm" />
            <input
              className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
              placeholder="Serach"
            />
          </div>
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-house-door-fill" />
            <span className="text-[15px] ml-4 text-gray-200">Home</span>
          </div>
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-bookmark-fill" />
            <span className="text-[15px] ml-4 text-gray-200">Bookmark</span>
          </div>
          <hr className="my-4 text-gray-600" />
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-envelope-fill" />
            <span className="text-[15px] ml-4 text-gray-200">Messages</span>
          </div>
          <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-chat-left-text-fill" />
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200">Chatbox</span>
              <span className="text-sm rotate-180" id="arrow">
                <i className="bi bi-chevron-down" />
              </span>
            </div>
          </div>
          <div
            className=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto"
            id="submenu"
          >
            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
              Social
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
              Personal
            </h1>
            <h1 className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1">
              Friends
            </h1>
          </div>
          <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-blue-600">
            <i className="bi bi-box-arrow-in-right" />
            <span className="text-[15px] ml-4 text-gray-200">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sidebar);
