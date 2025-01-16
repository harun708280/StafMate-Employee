import { Card, Typography } from "@material-tailwind/react";
import useTask from "../Hook/useTask";

const TABLE_HEAD = ["Task", "Hours Worked", "Date", "Actions"];

const ProjectTable = () => {
  const [tasks] = useTask();

  return (
    <div className="p-4">
      <Card className="h-full w-full border bg-[#060d22] text-white shadow-lg rounded-lg">
        <table className="w-full table-auto border-collapse text-left">
          {/* Table Head */}
          <thead className="bg-primary bg-opacity-30 text-white">
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={index}
                  className="border-b border-blue-gray-600 px-4 py-2 text-sm font-semibold uppercase"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {tasks.map((item, index) => {
              const isLast = index === tasks.length - 1;
              const rowClass = isLast
                ? "px-4 py-2"
                : "px-4 py-2 border-b border-blue-gray-700";

              return (
                <tr
                  key={item.id || index}
                  className={`hover:bg-primary transition duration-300`}
                >
                  {/* Task Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.task}
                    </Typography>
                  </td>

                  {/* Hours Worked Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.hours || "N/A"}
                    </Typography>
                  </td>

                  {/* Date Column */}
                  <td className={rowClass}>
                    <Typography variant="small" className="font-normal">
                      {item.date || "N/A"}
                    </Typography>
                  </td>

                  {/* Actions Column */}
                  <td className={rowClass}>
                    <div className="flex gap-2">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1 rounded shadow">
                        Edit
                      </button>
                      <button className="bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded shadow">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className="p-4 text-center text-gray-300">
            No tasks available. Please add some tasks.
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProjectTable;
