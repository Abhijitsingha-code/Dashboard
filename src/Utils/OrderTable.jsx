import React from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
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
              Dessert (100g serving)
            </th>
            <th role="columnheader" colSpan="1" className="table-heading">
              Calories
            </th>
            <th role="columnheader" colSpan="1" className="table-heading">
              Fat&nbsp;(g)
            </th>
            <th role="columnheader" colSpan="1" className="table-heading">
              Carbs&nbsp;(g)
            </th>
            <th role="columnheader" colSpan="1" className="table-heading">
              Protein&nbsp;(g)
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((row) => (
            <tr key={row.name}  className="border-t border-gray-200 hover:bg-gray-50">
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="table-row-des text-gray-500 font-semibold"> {row.name}</span></td>
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="text-gray-500">{row.calories}</span></td>
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="text-gray-500">{row.fat}</span></td>
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="text-gray-500">{row.carbs}</span></td>
              <td className="py-[1rem] px-[1.5rem] break-words"><span className="text-gray-500">{row.protein}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
