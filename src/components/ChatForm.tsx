import { useState } from "react";
import { TextField, Button } from "@mui/material";

const ChatForm = () => {
  const [message, setMessage] = useState("");

  // Handle sending a message
  const handleSend = () => {
    console.log("Message sent:", message);
    setMessage(""); // Clear input after sending
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 p-4 flex items-center">
      <TextField
        className="flex-1"
        label="Type a message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
      />
      <Button 
        variant="contained" 
        color="primary" 
        className="ml-2"
        onClick={handleSend}
      >
        Send
      </Button>
    </div>
  );
};

export default ChatForm;
