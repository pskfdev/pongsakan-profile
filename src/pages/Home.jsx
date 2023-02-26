import React from "react";
import { Typography } from "@mui/material";

function Home() {
  return (
    <div className="bgHome">
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <Typography className="text-white text-center" variant="h3" gutterBottom>
          pongsakan <span className="text-sky-400">obromkin</span>
        </Typography>
        <div className="flex justify-center job">
          <span>I am a</span>
          <div className="w-80 relative">
            <div className="slide-text text-sky-400">
              <div className="underline underline-offset-8 decoration-sky-400 font-bold">
                web developer
              </div>
              <div className="underline underline-offset-8 text-indigo-400 decoration-indigo-400 font-bold">
                frontend developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
