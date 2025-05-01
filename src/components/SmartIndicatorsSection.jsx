import { useState, useEffect } from "react";

const SmartIndicatorsSection = () => {
  // Simple animation for the line chart
  const [linePoints, setLinePoints] = useState(
    "M10,50 Q60,20 110,40 T210,30 T310,50"
  );

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random variations for the chart line
      const y1 = Math.floor(Math.random() * 30) + 30;
      const y2 = Math.floor(Math.random() * 20) + 30;
      const y3 = Math.floor(Math.random() * 25) + 20;
      const y4 = Math.floor(Math.random() * 30) + 20;
      setLinePoints(`M10,50 Q60,${y1} 110,${y2} T210,${y3} T310,${y4}`);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-16">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Spot Issues Faster via Smart Indicators
            </h2>
            <p className="text-gray-400 mb-6">
              Quickly identify and address problems with advanced AI-driven
              insights.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
              Try Now
            </button>
          </div>

          {/* First Feature Card - Cannibalization Detection */}
          <div className="w-full md:w-1/2 bg-[#402B755E] rounded-lg p-6 relative overflow-hidden">
            {/* Purple gradient effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>

            {/* Line chart visualization */}
            <div className="h-32 w-full mb-4 relative">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 320 100"
                className="overflow-visible"
              >
                {/* Purple gradient for the line */}
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>

                {/* Line path */}
                <path
                  d={linePoints}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Data points */}
                <circle cx="10" cy="50" r="4" fill="white" />
                <circle cx="80" cy="35" r="4" fill="white" />
                <circle cx="150" cy="40" r="4" fill="white" />
                <circle cx="220" cy="30" r="4" fill="white" />
                <circle cx="310" cy="50" r="4" fill="white" />
              </svg>
            </div>

            {/* Feature description */}
            <div className="relative z-10">
              <div className="mb-2 flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded transform rotate-45 mr-2"></div>
                <h3 className="font-bold text-lg">Cannibalization Detection</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Uncover and evaluate new growth opportunities to enhance your
                search strategy.
              </p>
            </div>
          </div>
        </div>

        {/* Second Feature - Market Intelligence */}
        <div className="flex justify-end mb-16">
          <div className="w-full md:w-1/2 bg-[#402B755E] rounded-lg p-6 relative overflow-hidden">
            {/* Purple glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/30 rounded-full blur-xl"></div>

            {/* Orb visualization */}
            <div className="h-40 w-full mb-4 flex justify-center">
              <div className="relative w-24 h-24">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-purple-600 to-fuchsia-400 rounded-full opacity-70 blur-sm"></div>
                <div className="absolute top-2 left-2 w-5/6 h-5/6 bg-white/80 rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-300 rounded-full"></div>
                <div className="absolute bottom-0 left-6 w-3 h-3 bg-purple-300 rounded-full"></div>
                <div className="absolute top-10 -right-4 w-2 h-2 bg-purple-200 rounded-full"></div>
              </div>
            </div>

            {/* Feature description */}
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">
                Market Intelligence Powered by AI
              </h3>
              <p className="text-gray-400 text-sm">
                Leverage artificial intelligence to gain deeper market
                understanding and competitive insights.
              </p>
            </div>
          </div>
        </div>

        {/* Third Feature - Seasonal Trends */}
        <div className="flex justify-end">
          <div className="w-full md:w-1/2 bg-[#402B755E] rounded-lg p-6 relative overflow-hidden">
            {/* Purple gradient line effect */}
            <div className="absolute -top-20 right-0 w-full h-full">
              <svg width="100%" height="100%" viewBox="0 0 300 200">
                <path
                  d="M20,150 C50,150 70,100 100,100 L150,100 C180,100 200,130 250,130 L300,130"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </div>

            {/* Data point visualization */}
            <div className="h-40 w-full mb-4 relative">
              <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/20">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></div>
              </div>

              <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-purple-500/50">
                <span className="text-sm font-mono">2T</span>
              </div>

              <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gray-800 rounded-md flex items-center justify-center border border-purple-500/50">
                <span className="text-sm font-mono">Q4</span>
              </div>
            </div>

            {/* Feature description */}
            <div className="relative z-10">
              <h3 className="font-bold text-lg mb-2">
                Seasonal Trends Tracking
              </h3>
              <p className="text-gray-400 text-sm">
                Identify and adapt to seasonal fluctuations for optimized
                performance year-round.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartIndicatorsSection;
