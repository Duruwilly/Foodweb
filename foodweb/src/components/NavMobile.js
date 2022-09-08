import React from "react";
import { Menu } from "./Navmenu";
import { Link } from 'react-router-dom'

const NavMobile = () => {
  return (
    <nav className="bg-white shadow-2xl w-full h-full">
      <ul className="text-center h-full flex flex-col items-center justify-center gap-y-6">
        {Menu.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className="text-xl capitalize">
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
