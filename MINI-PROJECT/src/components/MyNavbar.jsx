import React from 'react'
import { NavLink } from 'react-router-dom'

function MyNavbar() {
  return (
    <div>
      <nav className="navbar">
        <div
          className="hidden w-full md:block md:w-auto  pb-5 bg-yellow-200"
          id="navbar-default"
        >
          <ul className="flex flex-col p-6 md:p-0 md:flex-row md:space-x-8 ">
            <li className="text-4xl ml-4 mt-4">LAN-REACT</li>
            <div className="mt-8 flex flex-col p-4 md:p-0 md:flex-row md:space-x-8">
              <NavLink to="/home" className={({ isActive, isPending }) => isActive ? "text-red-500" : "text-black"}>
                <li>Home</li>
              </NavLink>
              <NavLink to="/menu" className={({ isActive, isPending }) => isActive ? "text-red-500" : "text-black"}>
                <li>Menu</li>
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default MyNavbar
