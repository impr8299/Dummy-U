import { useState } from "react";
import {
  Home,
  BarChart2,
  DollarSign,
  Settings,
  User,
  LogIn,
  Users,
  HelpCircle,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const mainNavItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: BarChart2, label: "Overview", active: false },
    { icon: DollarSign, label: "Revenue", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  const accountNavItems = [
    { icon: User, label: "Profile", active: false },
    { icon: LogIn, label: "Sign In", active: false },
    { icon: Users, label: "Join Community", active: false },
  ];

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative h-screen">
      <div
        className={`h-full bg-purple-950 text-white transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Toggle button */}
        <button
          onClick={toggleSidebar}
          className="absolute -right-3 top-6 bg-purple-600 rounded-full p-1 text-white z-10"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        {/* Logo */}
        <div className="px-6 py-5">
          {!collapsed && <h1 className="text-xl font-bold">CAWAR</h1>}
          {collapsed && <h1 className="text-xl font-bold text-center">C</h1>}
          <div className="border-b border-gray-700 mt-3"></div>
        </div>

        {/* Main Navigation */}
        <nav className="flex-1 px-3">
          <ul className="space-y-2 py-2">
            {mainNavItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                    item.active ? "bg-purple-700" : "hover:bg-purple-800"
                  }`}
                >
                  <item.icon className="text-purple-300" size={20} />
                  {!collapsed && (
                    <span className="ml-3 transition-opacity">
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Account Pages Section */}
          {!collapsed && (
            <div className="mt-6 mb-4 px-3">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                ACCOUNT PAGES
              </h2>
            </div>
          )}
          {collapsed && (
            <div className="mt-6 mb-4 px-3">
              <div className="border-b border-gray-700"></div>
            </div>
          )}

          <ul className="space-y-2">
            {accountNavItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`flex items-center px-3 py-3 rounded-lg transition-colors ${
                    item.active ? "bg-purple-700" : "hover:bg-purple-800"
                  }`}
                >
                  <item.icon className="text-purple-300" size={20} />
                  {!collapsed && (
                    <span className="ml-3 transition-opacity">
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Help Section */}
        <div className="m-3 mb-6">
          <div className="bg-purple-900 rounded-lg p-4">
            <div className="flex items-center mb-2">
              <div className="bg-purple-700 p-2 rounded-lg">
                <HelpCircle size={20} className="text-white" />
              </div>
              {!collapsed && (
                <div className="ml-3">
                  <h3 className="font-medium">Need help?</h3>
                  <p className="text-xs text-gray-300">Please check our docs</p>
                </div>
              )}
            </div>
            {!collapsed && (
              <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors">
                DOCUMENTATION
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
