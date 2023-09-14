import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Carousel from "./Carousel";
import { CircularProgress,Box } from "@mui/material";

const NewAlbumsCard = () => {
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  let URL = "https://qtify-backend-labs.crio.do/albums/new";

  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(URL);
      setNewAlbumsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewAlbums();
  }, []);

  return (
    <div>
      <div className="header">
        <h3>New Albums</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {newAlbumsData.length === 0 ? (
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
              {newAlbumsData.map((ele) => (
                <Card data={ele} type="album" key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={newAlbumsData}
              Component={(data) => <Card data={data} type="album" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default NewAlbumsCard;
