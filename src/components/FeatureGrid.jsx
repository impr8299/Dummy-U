import { useState, useEffect } from "react";

export default function FeaturesGrid() {
  // Animation state for subtle glow effects
  const [glowIntensity, setGlowIntensity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowIntensity((prev) => {
        const newValue = prev + (Math.random() * 0.2 - 0.1);
        return Math.max(0.8, Math.min(1.2, newValue));
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-gray-950 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Faster. Smarter.
            <br />
            Start in seconds
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience lightning-fast setup with intelligent features designed
            to optimize your workflow instantly.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: Real-Time Updates */}
          <div className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden border border-purple-900/30 h-64">
            {/* Glow effect */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"
              style={{ opacity: 0.6 * glowIntensity }}
            ></div>

            {/* Circle visualization */}
            <div className="h-24 flex items-center justify-center mb-6 relative">
              <div className="absolute w-20 h-20 rounded-full border border-purple-400/30 animate-pulse"></div>
              <div className="absolute w-16 h-16 rounded-full border border-purple-400/40"></div>
              <div className="absolute w-8 h-8 bg-gradient-to-br from-purple-400 to-fuchsia-300 rounded-full"></div>
            </div>

            <h3 className="text-xl font-bold mb-2 relative z-10">
              Real-Time Updates
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              Stay ahead with up-to-the-minute ranking data and keyword
              performance.
            </p>
          </div>

          {/* Card 2: Instant Insights */}
          <div className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden border border-purple-900/30 h-64">
            {/* Glow effect */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"
              style={{ opacity: 0.6 * glowIntensity }}
            ></div>

            {/* Bar chart visualization */}
            <div className="h-24 flex items-end justify-center space-x-3 mb-6 relative">
              <div className="h-16 w-3 bg-purple-500/80 rounded-sm"></div>
              <div className="h-12 w-3 bg-purple-500/80 rounded-sm"></div>
              <div className="h-20 w-3 bg-purple-500/80 rounded-sm"></div>
              <div className="h-10 w-3 bg-purple-500/80 rounded-sm"></div>

              {/* Venn diagram */}
              <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
                <div className="w-10 h-10 bg-purple-500/70 rounded-full absolute left-0"></div>
                <div className="w-10 h-10 bg-fuchsia-400/70 rounded-full absolute left-5"></div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 relative z-10">
              Instant Insights
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              Get immediate, actionable data to boost your SEO strategy without
              delay.
            </p>
          </div>

          {/* Card 3: Effortless Reporting */}
          <div className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden border border-purple-900/30 h-64">
            {/* Glow effect */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-600/20 rounded-full blur-xl"
              style={{ opacity: 0.6 * glowIntensity }}
            ></div>

            {/* Document visualization */}
            <div className="h-24 flex items-center justify-center mb-6 relative">
              <div className="w-16 h-20 border-2 border-purple-400 rounded-lg relative">
                <div className="absolute top-3 left-2 w-12 h-2 bg-purple-400/60 rounded-sm"></div>
                <div className="absolute top-7 left-2 w-10 h-2 bg-purple-400/60 rounded-sm"></div>
                <div className="absolute top-11 left-2 w-12 h-2 bg-purple-400/60 rounded-sm"></div>
                <div className="absolute top-15 left-2 w-8 h-2 bg-purple-400/60 rounded-sm"></div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 relative z-10">
              Effortless Reporting
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              Generate easy-to-read reports that provide clear insights into SEO
              progress.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 4: Lightning Fast */}
          <div className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden border border-purple-900/30 h-64">
            {/* Glow effect */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/30 rounded-full blur-xl"
              style={{ opacity: 0.7 * glowIntensity }}
            ></div>

            {/* Lightning bolt visualization */}
            <div className="h-24 flex items-center justify-center mb-6 relative">
              <div className="w-20 h-20 relative">
                <div className="absolute inset-0 w-full h-full bg-purple-400/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L4.5 12.5H11L10 22L18.5 10.5H12L13 2Z"
                      fill="url(#lightning-gradient)"
                      stroke="#fff"
                      strokeWidth="0.5"
                    />
                    <defs>
                      <linearGradient
                        id="lightning-gradient"
                        x1="4.5"
                        y1="2"
                        x2="18.5"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#e879f9" />
                        <stop offset="100%" stopColor="#c026d3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 relative z-10">
              Lightning Fast
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              From entering your site address to full setup, it's all done in
              just 60 seconds—no waiting around.
            </p>
          </div>

          {/* Card 5: Intelligent Targeting */}
          <div className="bg-gray-900/70 rounded-lg p-6 relative overflow-hidden border border-purple-900/30 h-64">
            {/* Glow effect */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-600/20 rounded-full blur-xl"
              style={{ opacity: 0.6 * glowIntensity }}
            ></div>

            {/* AI app visualization */}
            <div className="h-24 flex items-center justify-center mb-6 relative">
              <div className="relative">
                {/* Connection lines */}
                <div className="absolute -left-20 top-1/2 w-16 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
                <div className="absolute -left-16 top-1/3 w-12 h-px bg-gradient-to-r from-transparent to-purple-400"></div>
                <div className="absolute -left-14 top-2/3 w-10 h-px bg-gradient-to-r from-transparent to-purple-400"></div>

                {/* App icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-300 to-fuchsia-500 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* GEN AI label */}
                <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-1 text-xs text-gray-300 font-semibold">
                  GEN AI Powered
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2 relative z-10">
              Intelligent Targeting
            </h3>
            <p className="text-gray-400 text-sm relative z-10">
              Focus on analyzing your direct competitors for valuable insights
              and strategies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
