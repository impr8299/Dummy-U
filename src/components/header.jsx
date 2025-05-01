import { Bell, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-[#14102c] py-4 px-6 flex items-center justify-between sticky top-0 z-10 border-b border-gray-800">
      <div className="flex items-center">
        <p className="text-gray-400">Pages</p>
        <span className="mx-2 text-gray-500">/</span>
        <p className="text-white font-medium">Dashboard</p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Type here..."
            className="bg-purple-900 text-white pl-10 pr-4 py-2 rounded-lg w-56 focus:outline-none"
          />
          <Search size={16} className="absolute left-3 top-3 text-gray-400" />
        </div>

        <button className="text-white bg-purple-900 p-2 rounded-lg hover:bg-purple-800">
          <Bell size={18} />
        </button>

        <button className="flex items-center space-x-2 bg-purple-900 px-3 py-1 rounded-lg hover:bg-purple-800">
          <User size={18} className="text-white" />
          <span className="text-white text-sm">Sign In</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
