const ProgressBar = ({ percentage, color }) => {
  return (
    <div className="w-full bg-gray-700 rounded-full h-1.5">
      <div
        className={`${color} h-1.5 rounded-full`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
