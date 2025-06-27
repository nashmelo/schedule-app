import React from "react";

type Schedule = {
  [employee: string]: { [date: string]: string };
};

const employees = [
  "社長", "印南 敏典", "野口 英信", "亀田 孝明", "駒形 智子", "藤田 陽一"
];

const dates = ["6/1(日)", "6/2(月)", "6/3(火)"];

const schedule: Schedule = {
  "社長": { "6/1(日)": "休", "6/2(月)": "10:00 労働局", "6/3(火)": "" },
  "印南 敏典": { "6/1(日)": "休", "6/2(月)": "朝点呼", "6/3(火)": "" },
  "野口 英信": { "6/1(日)": "休", "6/2(月)": "9:00〜", "6/3(火)": "" },
  "亀田 孝明": { "6/1(日)": "休", "6/2(月)": "", "6/3(火)": "" },
  "駒形 智子": { "6/1(日)": "休", "6/2(月)": "", "6/3(火)": "" },
  "藤田 陽一": { "6/1(日)": "休", "6/2(月)": "", "6/3(火)": "" },
};

const ScheduleTable = () => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full table-fixed border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-400 w-32 p-2 bg-gray-200">やることリスト</th>
            {dates.map((date) => (
              <th key={date} className="border border-gray-400 w-40 p-2 bg-gray-100">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((name) => (
            <tr key={name}>
              <td className="border border-gray-400 p-2 bg-white font-bold">{name}</td>
              {dates.map((date) => (
                <td key={date} className="border border-gray-300 p-2">
                  {schedule[name]?.[date] ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleTable;
