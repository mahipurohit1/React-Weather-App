import React, { Component } from "react";
import { WeatherInfoIcons } from "../../util/WeatherIcons";
class WeatherInfo extends Component {
  render() {
    return (
      <div className="infoContainer">
        <img
          className="infoIcon"
          src={WeatherInfoIcons[this.props.name]}
          alt="img"
        />
        <div className="infoLabel">
          {this.props.value}
          <span>{this.props.name}</span>
        </div>
      </div>
    );
  }
}

export default WeatherInfo;
