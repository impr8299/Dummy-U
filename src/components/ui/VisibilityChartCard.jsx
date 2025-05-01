import Card from "./card";

const VisibilityChartCard = () => {
  return (
    <Card title="Visibility" fullWidth>
      <div className="flex items-center mb-4">
        <span className="text-green-400 text-xs font-medium">
          (+55%) more in 2024
        </span>
      </div>

      <div className="h-48 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-800/20 to-purple-800/5 rounded-lg"></div>
        <svg viewBox="0 0 400 100" className="w-full h-full overflow-visible">
          <path
            d="M0,80 C20,65 40,90 60,80 C80,70 100,20 120,30 C140,40 160,10 180,20 C200,30 220,60 240,50 C260,40 280,60 300,50 C320,40 340,70 360,50 C380,30 400,40 400,30 L400,100 L0,100 Z"
            fill="url(#purpleGradient)"
            opacity="0.6"
          />
          <path
            d="M0,80 C20,65 40,90 60,80 C80,70 100,20 120,30 C140,40 160,10 180,20 C200,30 220,60 240,50 C260,40 280,60 300,50 C320,40 340,70 360,50 C380,30 400,40 400,30"
            fill="none"
            stroke="#9061F9"
            strokeWidth="2"
          />
          <path
            d="M0,70 C25,60 50,80 75,70 C100,60 125,40 150,50 C175,60 200,30 225,40 C250,50 275,70 300,60 C325,50 350,60 375,70 C400,80 400,80 400,80"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
          />
          <defs>
            <linearGradient
              id="purpleGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9061F9" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#9061F9" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
    </Card>
  );
};

export default VisibilityChartCard;
