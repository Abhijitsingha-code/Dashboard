import React from "react";
import MenuListComponent from "./MenuListComponent";
import {
  appMenus,
  uiComponentMenus,
  authenMenu,
} from "../../assets/SidebarMenu";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../../features/sidebarSlice";

const Sidebar = () => {
  const toggleSidebar = useSelector(selectSidebar);

  return (
    <div
      className={`flex flex-col bg-gray-100 h-screen pt-1 px-4  ${
        toggleSidebar == true ? "w-52 min-w-[250px] transition-all duration-1000" : "duration-1000 transition-all w-20 min-w-[20px]"
      } overflow-y-auto scrollbar-thin scrollbar-w-1.5 scrollbar-w-1.5 scrollbar-thumb-gray-300 scrollbar-thumb-rounded-full dark:bg-gray-900`}
    >
      <div className="pb-4 pl-2">
        <img
          src={!toggleSidebar ? 'https://elstar.themenate.net/img/logo/logo-light-streamline.png' : 'https://elstar.themenate.net/img/logo/logo-light-full.png'}
          alt="logo"
        />  
      </div>
      <div className="mb-6">
        <h4
          className={`${
            toggleSidebar == false
              ? "hidden"
              : "text-zinc-500 font-semibold mb-[6px] px-[12px] uppercase"
          } `}
        >
          apps
        </h4>

        {appMenus.map((menu) => {
          return (
                <MenuListComponent
                  key={menu.id}
                  Icon={menu.Icon}
                  title={toggleSidebar == false ? "" : menu.title}
                  IconOpen={toggleSidebar == false ? null : menu.IconOpen}
                  IconClose={toggleSidebar == false ? null : menu.IconClose}
                  path={menu.path}
                  subMenu={menu.subMenu}
                />
          );
        })}
      </div>
      <div className="mb-6">
        <h4
          className={`${
            toggleSidebar == false
              ? "hidden"
              : "text-zinc-500 font-semibold mb-[6px] px-[12px] uppercase"
          } `}
        >
          ui components
        </h4>
        {uiComponentMenus.map((menu) => (
          <MenuListComponent
            key={menu.id}
            Icon={menu.Icon}
            title={toggleSidebar == false ? "" : menu.title}
            IconOpen={toggleSidebar == false ? "" : menu.IconOpen}
          />
        ))}
      </div>
     
      <div className="mb-6">
        <h4
          className={`${
            toggleSidebar == false
              ? "hidden"
              : "text-zinc-500 font-semibold mb-[6px] px-[12px] uppercase"
          } `}
        >
          authentication
        </h4>
        {authenMenu.map((menu) => (
          <MenuListComponent
            key={menu.id}
            Icon={menu.Icon}
            title={toggleSidebar == false ? "" : menu.title}
            IconOpen={toggleSidebar == false ? "" : menu.IconOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
