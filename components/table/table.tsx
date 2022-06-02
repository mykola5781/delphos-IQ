import React from "react";

export interface Column {
  id: number;
  name: string;
  label: string;
}

interface TableProps {
  columns: Column[];
  rows: any[];
  onClickCol?: (val: string) => void;
}
const Table: React.FC<TableProps> = (props) => {
  const { columns, rows, onClickCol } = props;
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columns.map(({ id, label, name }) => (
              <th
                key={id}
                onClick={() => onClickCol && onClickCol(name)}
                scope="col"
                className="px-6 py-3 cursor-pointer"
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              {columns.map((col) => (
                <td key={col.label} className="px-6 py-4">
                  {(row as any)[col.name]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface Props {}

export default Table;
