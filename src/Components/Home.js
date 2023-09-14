import React from "react";
import NavBar from "./NavBar";
import TopAlbumsCard from "./TopAlbumsCard";
import musicIcon from "../Assests/headset-icon.png";
import "./Home.css";
import { Box } from "@mui/material";
import NewAlbumsCard from "./NewAlbumsCard";
import SongsSection from "./SongsSection";
import AccordionItem from "./AccordionItem";

const Home = () => {
  return (
    <div className="main">
      <NavBar />
      <Box className="hero-section">
        <div>
          <h1>100 Thousand Songs,ad-free</h1>
          <h1>Over Thousands Podcast Episodes</h1>
        </div>
        <div>
          <img src={musicIcon} alt="hero-section" width={212} />
        </div>
      </Box>
      <TopAlbumsCard />
      <div className="albums-card">
       <NewAlbumsCard />
      </div>
      <div className="songs-card">
         <SongsSection />  
      </div>
      <div className="accordion">
         <AccordionItem />
      </div>
    </div>
  );
};

export default Home;
