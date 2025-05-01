import { BarChart3 } from "lucide-react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="relative w-full md:w-2/5">
            <div className="relative z-30 bg-purple-900/80 rounded-3xl p-6 shadow-xl transform rotate-3 translate-x-4 translate-y-4">
              <AnalyticsCard />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-purple-800/80 rounded-3xl p-6 shadow-xl transform rotate-2 translate-x-2 translate-y-2">
              <AnalyticsCard />
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-purple-700/80 rounded-3xl p-6 shadow-xl">
              <AnalyticsCard />
            </div>
          </div>

          {/* Right side - Text and button */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Create your account in minutes
            </h1>
            <p className="text-gray-300 mb-8">
              Easily sign up and get started right away with a simple,
              user-friendly process.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30">
              Let's Start
            </button>
          </div>
        </div>

        {/* Progress steps */}
        <div className="mt-24">
          {/* Progress bar */}
          <div className="w-full h-0.5 bg-gradient-to-r from-purple-700 via-pink-500 to-purple-500 mb-8 relative">
            <div className="absolute -top-1 left-0 w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="absolute -top-1 left-1/3 w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="absolute -top-1 left-2/3 w-3 h-3 rounded-full bg-purple-500"></div>
            <div className="absolute -top-1 right-0 w-3 h-3 rounded-full bg-purple-500"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StepItem number="01." title="Sign Up" />
            <StepItem number="02." title="Attach Site" />
            <StepItem number="03." title="Run AI Analytics" />
            <StepItem number="04." title="Get Smart Insights" active={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

function AnalyticsCard() {
  return (
    <div className="h-full w-full bg-purple-900/90 rounded-2xl overflow-hidden border border-purple-700/40 flex flex-col">
      {/* Top section with circle and chart */}
      <div className="flex items-start justify-between p-4 gap-4">
        {/* Circle gradient */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-300 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30"></div>

        {/* Bar chart */}
        <div className="flex items-end gap-2 h-20">
          <div className="w-2 h-10 bg-purple-500/40 rounded-t-md"></div>
          <div className="w-2 h-16 bg-purple-500/70 rounded-t-md"></div>
          <div className="w-2 h-8 bg-purple-500/50 rounded-t-md"></div>
          <div className="w-2 h-12 bg-purple-500/60 rounded-t-md"></div>
        </div>
      </div>

      {/* Bottom section with lines */}
      <div className="mt-auto p-4">
        <div className="bg-purple-800/50 rounded-md p-3 mb-4">
          <div className="flex gap-2 items-center">
            <div className="w-3/4 h-2 bg-purple-600/50 rounded-full"></div>
            <div className="w-1/6 h-2 bg-purple-600/30 rounded-full"></div>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="w-1/2 h-2 bg-purple-600/40 rounded-full"></div>
          <div className="w-1/4 h-2 bg-purple-600/30 rounded-full"></div>
        </div>

        {/* System Analyzing text */}
        <div className="text-gray-300 text-sm">System Analysing...</div>
      </div>
    </div>
  );
}

function StepItem({ number, title, active = false }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm text-gray-500 mb-1">{number}</span>
      <h3
        className={`text-lg ${
          active ? "text-white font-medium" : "text-gray-400"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}

export default Login;
