import "./SeasonDisplay.css";
import React from "react";

// #### OPTIONAL SEASON FUNCTION ####
// function getSeason(d) {
//   d = d || new Date();
//   var mon = d.getMonth();
//   var seasons = ["Spring", "Summer", "Autum", "Winter"];

//   mon = Math.floor((mon / 12) * 4) % 4;
//   return seasons[mon];
// }
const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "burr its cold!",
    iconName: "snowflake",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default Season;
