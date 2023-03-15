import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectSidebar } from "../../../features/sidebarSlice";

const MenuListComponent = ({
  path,
  Icon,
  title,
  IconOpen,
  IconClose,
  subMenu,
}) => {
  const [submenu, setSubmenu] = useState(false);
  const toggleSidebar = useSelector(selectSidebar);
  const subMenuRef = useRef()

  useEffect(()=>{
    const handler=(e)=>{
      if(!subMenuRef.current.contains(e.target)){
        setSubmenu(false)
      }
    }

    document.addEventListener('click',handler)

    return()=>{
      document.removeEventListener('click',handler)
    }
  },[])



  return (
    <>
      <NavLink to={path}>
        <div
          onClick={()=>setSubmenu(!submenu)}
          ref={subMenuRef}
          className="flex justify-between items-center cursor-pointer hover:bg-gray-200 hover:text-gray-900 rounded-md h-10 p-3 mt-2 text-zinc-600 relative"
        >
          <div className="flex ">
            <Icon />
            <p className="font-bold text-sm ml-[7px]">{title}</p>
          </div>

          {subMenu && submenu ? (
            IconOpen ? (
              <IconOpen />
            ) : null
          ) : subMenu ? (
            IconClose ? (
              <IconClose />
            ) : null
          ) : null}
        </div>
      </NavLink>

      {toggleSidebar ? (
        <>
          {subMenu && submenu
            ? subMenu.map((menu) => {
                return (
                    <NavLink
                      to={menu.path}
                      key={menu.id}
                      style={({ isActive }) =>
                        isActive == true
                          ? {
                              color: "#fff",
                              backgroundColor: "#7600dc",
                            }
                          : {}
                      }
                      className="transition-all duration-300 flex items-center cursor-pointer hover:bg-gray-200 hover:text-gray-900 rounded-md h-10 p-3 mt-2 ml-4 text-zinc-600"
                    >
                      {menu.MenuIcon && <menu.MenuIcon/>}
                      <p className="font-bold text-sm ml-3">{menu.title}</p>
                    </NavLink>
                );
              })
            : null}
        </>
      ) : (
        <>
          {subMenu && submenu ? (
            <div className="px-3 py-1 min-w-[150px] menu-dropdown">
              {subMenu?.map((item) => {

                return (
                    <NavLink to={item.path} key={item.id} className="flex flex-col gap-2  cursor-pointer hover:bg-gray-200 hover:text-gray-900 rounded-md">
                        <p className="px-3 py-1 text-gray-900 text-sm font-semibold leading-6">
                          {item.title}
                        </p>
                    </NavLink>
                );
              })}
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default MenuListComponent;
