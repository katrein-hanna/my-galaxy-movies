import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import MobileMenu from "./MobileMenu";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      id: 1,
      name: "home",
      link: "/",
    },
    {
      id: 2,
      name: "my movies",
      link: "/",
    },
    {
      id: 3,
      name: "about us",
      link: "/",
    },
  ];

  return (
    <>
      <nav className="w-full mx-auto sticky  z-10">
        <div className="flex items-center justify-between bg-primary/25 backdrop-blur-[10px] px-30 shadow-lg shadow-bright/25 ">
          {/* Logo section */}

          <img src={logo} alt="" className="w-55 h-25 object-contain " />

          {/* Menu section */}
          <div className=" md:block hidden mt-2">
            <ul className="flex justify-between items-center gap-10 font-medium">
              {menuItems.map((item) => (
                <li key={item.id}> {item.name} </li>
              ))}
            </ul>
          </div>

          {/* Buttons section  */}
          <div className="md:flex justify-between gap-5 hidden  mt-2">
            <button className="border-2 border-white hover:bg-highlights hover:shadow-md shadow-bright py-1 px-4 rounded-lg">
              sign in
            </button>
          </div>

          {/* Mobile humburger menu section */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            {!open ? <MdMenu /> : <MdClose />}
          </div>
        </div>
      </nav>
      {/* Mobile sidebar section */}
      <MobileMenu menu={menuItems} open={open} />
    </>
  );
}
