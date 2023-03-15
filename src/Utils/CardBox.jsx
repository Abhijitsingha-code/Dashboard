import React from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";

const CardBox = ({ title, percent, amount }) => {
  return (
    <div className="card-content">
      <div className="p-5">
        <h5 className="mb-4 text-md font-semibold">{title}</h5>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold">${amount}</h3>
            <p className="text-gray-500">
              vs. 3 months prior to{" "}
              <span className="font-semibold">26 Dec</span>
            </p>
          </div>
          {percent >= 0 ? (
            <div className="tag gap-1 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-100 font-bold bg-emerald-100 bg-emerald-500/20 border-0">
              <p className="items-center">
                <ArrowUpwardOutlinedIcon fontSize="inherit" />
                {percent}%
              </p>
            </div>
          ) : (
            <div className="tag gap-1 text-red-600 dark:text-red-500 dark:bg-red-100 font-bold bg-red-100 bg-red-500/20 border-0">
              <p className="items-center">
                <ArrowDownwardOutlinedIcon fontSize="inherit" />
                {percent}%
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBox;
