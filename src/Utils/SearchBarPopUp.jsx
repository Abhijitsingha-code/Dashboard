import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarPopUp = ({ trigger, setSearchPop }) => {
  return trigger ? (
    <div className="dialog-overlay">
      <div
        style={{ inset: "unset", width: "520px" }}
        className="mr-auto ml-auto xl:max-w-6xl lg:max-w-4xl md:max-w-2xl sm:max-w-xl"
      >
        <div className="dialog-content md:mt-[4rem] md:mb-[4rem]">
          <div>
            <div className="px-4 pb-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600">
              <div className="flex items-center text-gray-500">
                <SearchIcon />
                <input
                  className="ml-[10px] outline-none text-gray-700 text-base"
                  placeholder="Search..."
                />
              </div>
              <button
                onClick={() => setSearchPop(false)}
                className="font-semibold whitespace-nowrap bg-white border border-gray-300 dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 text-gray-600 dark:text-gray-100 rounded-md	 h-7 text-xs px-3 py-1"
              >
                Esc
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SearchBarPopUp;
