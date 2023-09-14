import { Chip, Tooltip } from "@mui/material";
import "./Card.css";
import React from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ data, type }) => {
 
  
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
            <div className="wrapper">
              <div className="card">
                <img src={image} width={159} height={170} alt="img-cover" />
                <div className="banner">
                  <Chip
                    label={`${follows} Follows`}
                    className="chip"
                    size="small"
                  />
                </div>
              </div>
              <div className="titleWrapper">
                <p>{title}</p>
              </div>
            </div>
          </Tooltip>
        );
      }
      case "songs": {
        const { image, likes, title, songs } = data;
        return (
            <div className="wrapper">
              <div className="card">
                <img src={image} width={159} height={170} alt="img-cover" />
                <div className="banner">
                  <div className="pill">
                    <p>{likes} likes</p>
                  </div>
                </div>
              </div>
              <div className="titleWrapper">
                <p>{title}</p>
              </div>
            </div>
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;

