import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatForm from "./components/ChatForm";

function App() {
  return (
    <div className="flex flex-col h-screen">
      {/* Message list area (placeholder) */}
      <div className="flex-1 bg-gray-200 p-4">
        Message list area
      </div>
      
      {/* Chat input form at the bottom */}
      <ChatForm />
    </div>
  );
}

export default App;