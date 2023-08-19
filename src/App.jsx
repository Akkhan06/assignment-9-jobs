import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLoaderData } from "react-router-dom";

export const featur = createContext(0)
function App() {
  const features = useLoaderData()

  return (
    <div>
      <div className="bg-blue-50 flex justify-center">
        <div className="md:w-[1240px]">
          <Header />
        </div>
      </div>

     <featur.Provider value={features}>
     <Main></Main>
     </featur.Provider>
  
    </div>
  );
}

export default App;
