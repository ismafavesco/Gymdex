import axios from "axios";


// Determine the baseURL based on the environment
const baseURL = process.env.NODE_ENV === "production" 
    ? "https://github.com/ismafavesco/gymdex"  // Replace with your actual deployed backend URL
    : "http://localhost:3000";  // Assuming your backend runs on port 3000

// Create and export the axios instance
export default axios.create({ baseURL });
