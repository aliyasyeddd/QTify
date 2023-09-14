import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SongSection.css";
import Card from "./Card";
import BasicTabs from "./BasicTabs";
import Carousel from "./Carousel";
import { CircularProgress, Box } from "@mui/material";

const SongsSection = () => {
  const [songsData, setSongsData] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);
  const [carouselToggle, setCarouselToggle] = useState(true);
  let type = "songs";

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      filteredData(songsData);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else if (value === 4) {
      key = "blues";
    }

    const res = songsData.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateSongsData(value);
  }, [value]);

  let URL = "https://qtify-backend-labs.crio.do/songs";

  const fetchSongs = async () => {
    try {
      const response = await axios.get(URL);
      setSongsData(response.data);
      setFilteredDataValues(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  useEffect(() => {
    fetchSongs();
    generateSongsData();
  }, []);

  return (
    <div>
      <div className="header">
        <h3>Songs</h3>
        <h4 className="toggleText" onClick={handleToggle}>
          {carouselToggle ? "Show All" : "Collapse All"}
        </h4>
      </div>
      {type === "songs" ? <BasicTabs value={value} handleChange={handleChange}/> : null}
      {songsData.length === 0 ? (
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
              {filteredDataValues.map((ele) => (
                <Card data={ele} type="songs" key={ele.id} />
              ))}
            </div>
          ) : (
            <Carousel
              data={filteredDataValues}
              Component={(data) => <Card data={data} type="songs" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SongsSection;
