import React from "react";

function createData(Product, sales) {
  return { Product, sales };
}

const rows = [
  createData("Headphones", 159),
  createData("Sneakers", 237),
  createData("Sun Glasses",766),
  createData("Hoodies", 305,),
  createData("BackPack", 356,),
];

export default function BasicTable() {
  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-[100%] table-auto	"
        style={{ borderCollapse: "collapse", textIndent: 0 }}
      >
        <thead>
          <tr role="row" className="bg-gray-50">
            <th role="columnheader" colSpan="1" className="table-heading">
              Products
            </th>
            <th role="columnheader" colSpan="1" className="table-heading">
              Sold
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((row) => (
            <tr key={row.Product}  className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="table-row-des text-gray-500 font-semibold"> {row.Product}</span></td>
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="text-gray-500">{row.sales}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
