import React from "react";
import { Menu } from "./Navmenu";
import { Link } from 'react-router-dom'

const NavMobile = () => {
  return (
    <nav className="bg-white shadow-2xl w-full h-full">
      <ul className="text-cente h-full flex flex-col items-cente justify-cnter gap-y-16 py-32 px-16">
        {Menu.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className="text-4xl capitalize">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
