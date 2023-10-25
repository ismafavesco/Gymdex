import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";


const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;


if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const App = () => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <SignedIn>
        <Welcome />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

    </ClerkProvider>
  );
};

const Welcome = () => {
  return (
    
    <>
      <Box width={{ xl: "1488px" }} m="auto">
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/exercise/:id" element={ <ExerciseDetail />} />
            </Routes>
          </>
        
      </Box>
      <Footer />
    </>
  );
};

export default App;
