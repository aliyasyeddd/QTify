import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TopAlbumsCard.css";
import Card from "./Card";
import Carousel from "./Carousel";
import { CircularProgress, Box } from "@mui/material";


const TopAlbumsCard = () => {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  let URL = "https://qtify-backend-labs.crio.do/albums/top";

  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(URL);
      setTopAlbumsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  return (
    <div>
      <div className="header">
        <h3>Top Albums</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {topAlbumsData.length === 0 ? (
         <Box
         sx={{
           display: "flex",
           justifyContent: "center",
           alignItems: "center",
         }}
       >
         <CircularProgress />
       </Box>
      ) : (
        <div className="cardWrapper">
          {!carouselToggle ? (
            <div className="albumWrapper">
              {topAlbumsData.map((ele) => (
                <Card data={ele} type="album" key={ele.id} />
              ))}
            </div>
           ) : (
            <Carousel
              data={topAlbumsData}
              Component={(data) => (
                <Card data={data} type="album"/>
              )}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default TopAlbumsCard;
