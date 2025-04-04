import React, { useState } from "react";
import { BiAlignJustify } from "react-icons/bi";

const Navbar = () => {
  const menus = ["Home", "Contractors", "Services", "Contact", "painting","Projects"];
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 flex justify-between items-center">
      <div className="flex items-center justify-center">
        <img src="/nav.png" alt="logo" width="70" />
        <span className="text-2xl font-bold text-blue-500">Industrail Painter</span>
      </div>
      <button onClick={() => setOpen(true)} className="lg:hidden sm:block">
        <BiAlignJustify />
      </button>
      <div className="hidden lg:flex">
        {menus.map((menu, index) => (
          <span key={index} className="mx-4 cursor-pointer">
            {menu}
          </span>
        ))}
      </div>
      
      {open && (
        <div className="lg:hidden sm:block absolute top-0 left-0 w-full overflow-y-hidden h-screen bg-white p-4">
          <button onClick={() => setOpen(false)} className="absolute top-4 right-4">
            <BiAlignJustify />
          </button>
          <ul>
            {menus.map((menu, index) => (
              <li key={index} className="py-4 border-b border-gray-200">
                <span className="cursor-pointer">{menu}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;