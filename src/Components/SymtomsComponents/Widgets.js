import React from "react";
import { TwitterTimelineEmbed, TwitterVideoEmbed } from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__widgetContainer">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="WHO"
          options={{ height: 500 }}
          noScrollbar
        />
      </div>
      <div className="widgets__widgetVideo">
        <TwitterVideoEmbed id="1303975750400446464" />
      </div>
    </div>
  );
}

export default Widgets;
