const StatCard = ({ value, label, delta, icon, iconBgColor }) => {
  const Icon = icon;

  return (
    <div className="bg-purple-950 rounded-xl p-4 flex items-center justify-between">
      <div>
        <div className="flex items-center space-x-2">
          <p className="text-white text-lg font-bold">{value}</p>
          <span
            className={`text-xs font-medium ${
              delta.startsWith("+") ? "text-green-500" : "text-red-500"
            }`}
          >
            {delta}
          </span>
        </div>
        <p className="text-gray-400 text-sm">{label}</p>
      </div>
      <div className={`${iconBgColor} p-3 rounded-lg`}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
  );
};

export default StatCard;
