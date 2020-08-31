import React from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
  TwitterVideoEmbed,
} from "react-twitter-embed";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CovidnewsbyMIB"
          options={{ height: 500 }}
          noScrollbar
        />
      </div>
      <div className="widgets__widgetVideo">
        <TwitterVideoEmbed id="1299977672370475010" />
      </div>
    </div>
  );
}

export default Widgets;
