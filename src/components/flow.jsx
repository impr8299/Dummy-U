import { CheckCircle } from "lucide-react";

export default function Flow() {
  return (
    <div className="w-full bg-gray-950 text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Smooth Integration for Effortless Workflow
          </h2>
          <p className="text-gray-400 mb-8">
            Easily integrate Wope with your existing tools and platforms for a
            seamless experience.
          </p>

          <div className="space-y-4">
            <div className="flex items-center">
              <CheckCircle className="text-blue-500 mr-3" size={20} />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-blue-500 mr-3" size={20} />
              <span>Compatible with Major Platforms</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="text-blue-500 mr-3" size={20} />
              <span>Real-Time Data Sync</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative">
          <img
            src="/flash.png"
            alt="Integration Section"
            className="w-full rounded-3xl"
          />{" "}
        </div>
      </div>
    </div>
  );
}
