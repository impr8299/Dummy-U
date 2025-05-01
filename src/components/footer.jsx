import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-950 text-white py-12 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, colIndex) =>
          Array.from({ length: 4 }).map((_, rowIndex) => (
            <div
              key={`${colIndex}-${rowIndex}`}
              className="border-t border-l border-gray-800/30"
              style={{
                gridColumn: `${colIndex + 1}`,
                gridRow: `${rowIndex + 1}`,
              }}
            />
          ))
        )}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-500 mb-3">proxima</h2>
            <p className="text-gray-400 max-w-md">
              Proxima is an AI solution that boosts your product's SEO ranking
              and visibility.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="p-2 rounded-md border border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md border border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-md border border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>All copyrights are reserved @proxima pvt ltd</p>
          <p className="mt-4 md:mt-0">
            Made on earth with <span className="text-pink-500">❤️</span> human
          </p>
        </div>
      </div>
    </footer>
  );
}
