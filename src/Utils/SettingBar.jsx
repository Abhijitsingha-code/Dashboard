import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import Switch from '@mui/material/Switch';

const SettingBar = ({setShowSetting}) => {
  return (
    <div className="dialog-overlay">
      <div className="setting-dailog">
        <div className="flex items-center px-6 py-5 justify-between border-b border-gray-200">
            <p className="text-gray-800 font-semibold leading-7 text-[1.3rem]">Theme Config</p>
            <CloseIcon onClick={() => setShowSetting(false)} />
        </div>
        <div className="drawer-body">
            <div className="flex flex-col h-full gap-y-10 mb-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <p className="text-gray-900 text-lg font-semibold leading-6">Dark Mode</p>
                        <p className="text-gray-400 text-base">Switch theme to dark mode</p>
                    </div>
                    <Switch/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SettingBar;
