import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatForm from "./components/ChatForm";
import DataList from "./components/DataList";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Scrollable data list */}
      <DataList />
      
      {/* Chat input form at the bottom */}
      <ChatForm />
    </div>
  );
}

export default App;