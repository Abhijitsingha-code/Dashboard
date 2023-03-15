import React from "react";
import OrderTable from './OrderTable'
import TopSellingOrder from './TopSellingOrder'

const Order = () => {
  return (
    <div className="relative h-full flex flex-auto flex-col px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="card-content col-span-2">
        <div className="p-5">
          <div className="flex justify-between items-center pb-5">
            <h5 className="text-xl font-semibold">Lastest Orders</h5>
            <button className="px-3 py-2 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 text-gray-600 dark:text-gray-100 rounded-md h-9 items-center flex justify-center">
              <p className="font-semibold text-sm">View Orders</p>
            </button>
          </div>
          <OrderTable/>
        </div>
      </div>
      <div className="card-content">
        <div className="p-5">
          <div className="flex justify-between items-center pb-5">
            <h5 className="text-xl font-semibold">Top Selling</h5>
            <button className="px-3 py-2 bg-white border border-gray-300 dark:border-gray-700 dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 active:bg-gray-100 dark:active:bg-gray-500 text-gray-600 dark:text-gray-100 rounded-md h-9 items-center flex justify-center">
              <p className="font-semibold text-sm">View Products</p>
            </button>
          </div>
          <TopSellingOrder/>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Order;
