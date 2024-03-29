"use client"
import React from 'react';
import { GrLogout } from "react-icons/gr";
import { MdAddToHomeScreen } from "react-icons/md";
import Link from "next/link";
import TaskMenu from './TaskMenu';
import MenuList from './MenuList';
const SideNav = () => {
    
  return (
    <>
    <div
    className='flex flex-col justify-between bg-gray-100 w-48 space-y-12 px-2 py-4'
    >
      <div>
        <Link href='/' className="w-full px-4 py-2 shadow-lg rounded-lg items-center bg-red-100 mx-auto justify-center text-center text-xl font-bold"> <span className="text-red-600">Task</span> Buddy
        </Link>
        {/* Nav Items */}
        <div className="flex flex-col justify-between flex-1 mt-6">
                      <nav>
              <TaskMenu/>
            </nav>

        </div>
      </div>
      <div>
        <hr/>
        <MenuList
          icon={MdAddToHomeScreen}
          label="Home"
          address="/"
        />
        <button
          className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
        >
          <GrLogout className="w-5 h-5" />
          <span className="mx-4 font-medium">Logout</span>
        </button>
      </div>
    </div>
  </>
  )
}

export default SideNav