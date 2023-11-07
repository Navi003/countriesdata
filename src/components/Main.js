import React from "react";
import Spinner from "../Spinner";
import CountryDataCard from "./Layout/CountryDataCard";

export default function Main(props) {
  return (
    <section className="section container">
      {props.loading && <Spinner />}
      {props.error && <p>{props.error}</p>}
      {props.data &&
        props.data.map((country) => (
          <CountryDataCard
            onShowHandler={props.onShowCountryData}
            key={country.flags.png}
            flag={country.flags.png}
            population={country.population}
            name={country.name.common}
            continent={country.region}
            capital={country.capital}
          />
        ))}
    </section>
  );
}
