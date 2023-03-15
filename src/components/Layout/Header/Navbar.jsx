import React, { useEffect, useRef, useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Avatar } from "@mui/material";
import SearchBarPopUp from "../../../Utils/SearchBarPopUp";
import { profileData } from "../../assets/SidebarMenu";
import MenuListComponent from "../Sidebar/MenuListComponent";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingBar from "../../../Utils/SettingBar";
import NotificationDropDown from "../../../Utils/NotificationDropDown";
import { useDispatch } from "react-redux";
import { onSidebarToogle } from "../../../features/sidebarSlice";

const Navbar = () => {
  const [hambar, setHambar] = useState(false);
  const [searchPop, setSearchPop] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch()
  const userImgRef = useRef()
  const notiRef = useRef()

  useEffect(()=>{
    let handle =(e)=>{
      if(!userImgRef.current?.contains(e.target)){
        setShowProfile(false)
      }
      if(!notiRef.current?.contains(e.target)){
        setShowNotification(false)
      }
    }
    document.addEventListener('click',handle)
    return()=>{
      document.removeEventListener('click',handle)
    }
  },[])

  const toggleHam =()=>{
    setHambar(!hambar)
    dispatch(onSidebarToogle(!hambar))
  }

  return (
    <header className="border-b border-gray-200 text-gray-500 dark:border-gray-700 bg-white dark:bg-gray-800 opacity-100 z-20 sticky top-0 w-[100%]">
      <div className="h-16 flex items-center w-[100%] px-4 relative justify-between">
        <div className="flex items-center">
          <div
            onClick={toggleHam}
            className="on-hover p-[8px] m-[2px] rounded-full	hover:bg-gray-100 hover:text-gray-700"
          >
            {!hambar ? (
              <MenuIcon fontSize="medium" />
              ) : (
              <MenuOpenIcon fontSize="medium" />
            )}
          </div>
          <div className="on-hover p-[8px] m-[2px] rounded-full	hover:bg-gray-100 hover:text-gray-700">
            <SearchIcon onClick={() => setSearchPop(true)} fontSize="medium" />
          </div>
          <SearchBarPopUp trigger={searchPop} setSearchPop={setSearchPop} />
        </div>
        <div className="flex items-center justify-between relative">
          <div ref={notiRef} onClick={()=>setShowNotification(!showNotification)} className="p-[8px] m-[2px] rounded-full	hover:bg-gray-100 hover:text-gray-700">
            <NotificationsOutlinedIcon fontSize="medium" />
          {showNotification && <NotificationDropDown/>}
          </div>
          <div
            onClick={() => setShowSetting(true)}
            className="on-hover p-[8px] m-[2px] rounded-full	hover:bg-gray-100 hover:text-gray-700"
          >
            <SettingsOutlinedIcon fontSize="medium" />
          </div>
          {showSetting && (
            <SettingBar setShowSetting={setShowSetting}/>
          )}
          <div
            ref={userImgRef}
            className="relative flex items-center p-[11px] cursor-pointer"
            >
            <Avatar
              onClick={() => setShowProfile(!showProfile)}
              src="https://elstar.themenate.net/img/avatars/thumb-1.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <div className="p-[8px] m-[2px] hidden md:block">
              <p className="text-xs">Admin</p>
              <h4>Abhijit singha</h4>
            </div>
          </div>
          {showProfile && (
            <div className="profile-dropdown">
              <div className="flex flex-col ml-[5px]">
                <div className="flex items-center grid-4">
                  <Avatar
                    src="https://elstar.themenate.net/img/avatars/thumb-1.jpg"
                    sx={{ width: 32, height: 32 }}
                  />
                  <div className="p-[8px]">
                    <p className="font-bold text-gray-900 dark:text-gray-100">Abhijit singha</p>
                    <p className="text-xs">abhijit@mail.com</p>
                  </div>
                </div>
                <div className="menu-item-divider"></div>
                {profileData?.map((data)=>(
                  <MenuListComponent path={data.path} key={data.id} title={data.title} Icon={data.Icon}/>
                ))}
                <div className="menu-item-divider"></div>
                <MenuListComponent path='/signin' title='SignOut' Icon={ExitToAppOutlinedIcon}/>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
