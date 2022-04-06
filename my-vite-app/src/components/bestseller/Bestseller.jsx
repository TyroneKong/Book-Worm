import React from "react";
import Button from "@mui/material/Button";
import "./Bestseller.scss";

const Bestseller = ({ getNewYorkTimes, bestseller }) => {
  return (
    <>
      <div className="bestseller">
        <h2>New York Times Best Sellers</h2>
        <img className="bestseller__image" src={bestseller}></img>
      </div>
      <div className="bestseller__button-container">
        <Button
          className="bestseller__button"
          variant="contained"
          onClick={() => getNewYorkTimes()}
        >
          Click for current best sellers
        </Button>
      </div>
    </>
  );
};

export default Bestseller;
