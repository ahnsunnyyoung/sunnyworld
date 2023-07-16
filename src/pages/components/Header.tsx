import React, { useState } from "react";
import { TbSunFilled } from 'react-icons/tb';

const navLinks = [
  {
    name: "About",
    path: "#aboutComponent",
  },
  {
    name: "Skills",
    path: "#skillsComponent",
  },
  {
    name: "Education",
    path: "#educationComponent",
  },
  {
    name: "Experiences",
    path: "#experiencesComponent",
  },
  {
    name: "Projects",
    path: "#projectsComponent",
  },
  {
    name: "Contact",
    path: "#endSection",
  },
];

function NavLink({to, children}: { to: string; children: any }) {
  return <a href={to} className={`mx-4`}>
      {children}
  </a>
}

function MobileNav({open, setOpen}: { open: boolean; setOpen: any }) {
  return (
      <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
          <div className="flex items-center justify-center filter drop-shadow-md bg-gray-700/10 h-20"> {/*logo container*/}
              <a className="flex items-center" href="#mainSection">
                <TbSunFilled size={'2.5rem'}/>
              </a>
          </div>
          <div className="flex flex-col ml-4">
              {navLinks.map((link, index) => {
                return (
                  <a className="text-xl font-medium my-4" href={link.path} key={index} onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    {link.name}
                  </a>
                );
              })}
          </div>  
      </div>
  )
}

export default function Header() {

  const [open, setOpen] = useState(false)

  return (
    <nav className="z-50 fixed flex filter px-4 pt-8 md:px-20 w-full h-20 items-center md:mix-blend-color-burn">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="hidden md:block text-2xl font-semibold" href="#mainSection">
                  <TbSunFilled size={'4.5rem'}/>
                </a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>
                <div className="hidden md:flex">
                  {navLinks.map((link, index) => {
                    return (
                      <NavLink to={link.path} key={index}>
                        {link.name}
                      </NavLink>
                    );
                  })}
                </div>
            </div>
        </nav>
  );
}