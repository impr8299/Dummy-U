import { MoreHorizontal } from "lucide-react";
import Card from "./card";
import ProgressBar from "./progressbar";

const CountryDataCard = () => {
  const countries = [
    { name: "USA", count: 2445, percent: 60, visitors: 5 },
    { name: "Germany", count: 665, percent: 10, visitors: 2 },
    { name: "France", count: 223, percent: 100, visitors: 2 },
    { name: "Indonesia", count: 184, percent: 100, visitors: 3 },
    { name: "Japan", count: 87, percent: 25, visitors: 5 },
    { name: "Australia", count: 29, percent: 40, visitors: 2 },
  ];

  return (
    <Card title="Country Data View" fullWidth>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">By ID</span>
          <span className="bg-purple-700 px-2 py-1 rounded text-xs text-white">
            Active user
          </span>
        </div>
        <button>
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400 text-sm">
            <th className="pb-3">Country</th>
            <th className="pb-3">Visitor</th>
            <th className="pb-3">Count</th>
            <th className="pb-3">Avg. Percent</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index} className="border-t border-gray-800">
              <td className="py-3 text-white">{country.name}</td>
              <td className="py-3">
                <div className="flex">
                  {Array.from({ length: country.visitors }).map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full bg-purple-800 border-2 border-purple-950 -ml-1 first:ml-0"
                    />
                  ))}
                </div>
              </td>
              <td className="py-3 text-white">{country.count}</td>
              <td className="py-3 w-1/4">
                <div className="flex items-center space-x-2">
                  <span className="text-white">{country.percent}%</span>
                  <ProgressBar
                    percentage={country.percent}
                    color="bg-indigo-600"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default CountryDataCard;
