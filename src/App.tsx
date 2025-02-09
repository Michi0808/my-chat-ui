import './App.css';
import ChatForm from "./components/ChatForm";
import DataList from "./components/DataList";
import SidebarMenu from "./components/SidebarMenu"; // Import SidebarMenu

function App() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar Menu */}
      <SidebarMenu />

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        {/* Scrollable data list */}
        <DataList />

        {/* Chat input form at the bottom */}
        <ChatForm />
      </div>
    </div>
  );
}

export default App;
