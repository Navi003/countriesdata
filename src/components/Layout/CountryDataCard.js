import React, { useRef } from "react";
import Card from "../UI/Card";

export default function CountryDataCard(props) {
  const countryName = useRef();

  const sendData = function () {
    const COUNTRY_NAME = countryName.current.innerHTML;
    props.onShowHandler(COUNTRY_NAME);
  };

  return (
    <Card onClick={sendData}>
      <div className="img-box">
        <img src={props.flag} alt="country-flag" />
      </div>
      <div className="info-box">
        <h3 ref={countryName} className="country-name">
          {props.name}
        </h3>
        <span className="country-population">
          <b>Population:</b>
          {props.population}
        </span>

        <span className="country-reagion">
          <b>Region:</b>
          {props.continent}
        </span>

        <span className="country-capital">
          <b>Capital:</b>
          {props.capital}
        </span>
      </div>
    </Card>
  );
}
