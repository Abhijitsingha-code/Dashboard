import { Avatar } from "@mui/material";
import React from "react";

const NotificationDropDown = () => {
  return (
    <div className="p-0 min-w-[180px] md:min-w-[340px] sm:min-w-[280px] notification-dropdown">
      <div className="flex flex-col gap-2">
        <div className="px-5 py-3 border-b border-gray-200">
          <p className="text-gray-900 text-lg font-semibold leading-6">
            Notifications
          </p>
        </div>
        <div className="flex flex-col mx-[0.75rem] pt-2 pb-4">
          <div className="flex items-center mb-2">
            <Avatar />
            <p className="ml-[1rem] text-gray-900 font-medium text-sm">
              Suraj{" "}
              <span className="text-gray-400 font-normal">
                invited you to a new project.
              </span>
            </p>
          </div>
          <p className="pl-[3.5rem] text-gray-400 text-xs">4 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropDown;
