import React from "react";
import "./InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({
  title,
  active,
  cases,
  total,
  image,
  isCases,
  isRecovered,
  isDeaths,
  ...props
}) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"} ${
        isCases && "infoBox--cases"
      }`}
    >
      <CardContent>
        <div className="infoBox__main">
          <div className="infoBox__left">
            <Typography className="infoBox__title" color="textSecondary">
              {title}
            </Typography>
            <h2 className="infoBox__cases">+{cases}</h2>
            <Typography className="infoBox__total">{total} Total</Typography>
          </div>
          <div className="infoBox__right">
            <img className="infoBox__logo" src={image} alt="logo"></img>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
