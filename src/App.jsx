import Dashboard from "./components/dashboard";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#14102c]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
