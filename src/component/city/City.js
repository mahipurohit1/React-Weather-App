import React, { Component } from "react";
import "./City.css";
class City extends Component {
  constructor() {
    super();
    this.state = {
      cityName: "",
    };
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.cityName);
    //    this.props.updateCity(this.state.cityName);
    this.props.fetchWeather(this.state.cityName);
  }

  render() {
    return (
      <>
        <img className="welcomeWeatherLogo" src={"/icons/perfect-day.svg"} />
        <span className="chooseCityLabel">Find Weather of your city</span>
        <form className="form" onSubmit={this.onSubmit.bind(this)}>
          <input
            onChange={(e) => this.setState({ cityName: e.target.value })}
            placeholder="City"
          />
          <button type={"submit"}>Search</button>
        </form>
      </>
    );
  }
}

export default City;
