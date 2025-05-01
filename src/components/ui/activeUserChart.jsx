import { DollarSign, Layers, Share, Users } from "lucide-react";
import Card from "./card";

const ActiveUsersChart = () => {
  return (
    <Card title="Active Users" fullWidth>
      <div className="flex items-center mb-4">
        <span className="text-green-400 text-xs font-medium">
          (+22) than last week
        </span>
      </div>

      <div className="h-40 flex items-end justify-between px-4">
        {[70, 40, 20, 60, 80, 50, 90, 30, 45].map((height, index) => (
          <div
            key={index}
            className="w-6 bg-white rounded-t-sm"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className="bg-purple-900 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <div className="bg-purple-700 p-1 rounded">
              <Users size={14} className="text-white" />
            </div>
            <span className="text-gray-400 text-xs">Users</span>
          </div>
          <p className="text-white font-bold">32,984</p>
        </div>

        <div className="bg-purple-900 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <div className="bg-indigo-700 p-1 rounded">
              <Share size={14} className="text-white" />
            </div>
            <span className="text-gray-400 text-xs">Clicks</span>
          </div>
          <p className="text-white font-bold">2.42m</p>
        </div>

        <div className="bg-purple-900 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <div className="bg-pink-700 p-1 rounded">
              <DollarSign size={14} className="text-white" />
            </div>
            <span className="text-gray-400 text-xs">Sales</span>
          </div>
          <p className="text-white font-bold">2,400$</p>
        </div>

        <div className="bg-purple-900 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <div className="bg-cyan-700 p-1 rounded">
              <Layers size={14} className="text-white" />
            </div>
            <span className="text-gray-400 text-xs">Items</span>
          </div>
          <p className="text-white font-bold">320</p>
        </div>
      </div>
    </Card>
  );
};

export default ActiveUsersChart;
