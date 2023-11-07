import React, { useState, useEffect } from "react";
import FormSearch from "./components/Layout/FormSearch";
import MainInfo from "./components/Layout/MainInfo";
import Navbar from "./components/Layout/Navbar";
import Main from "./components/Main";

function App() {
  const [counteryData, setCountryData] = useState("");
  const [LINK, setLink] = useState("https://restcountries.com/v3.1/all");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [showCounteryData, setShowCounteryData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(LINK);
        if (!response.ok) {
          throw new Error("Something Went Wron Please check Spelling");
        }
        const dataResponse = await response.json();

        setCountryData(dataResponse);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [LINK]);

  const getEnterDataHandler = function (data) {
    if (data.name) {
      setLink(`https://restcountries.com/v3.1/name/${data.name}`);
    }

    if (data.region) {
      setLink(`https://restcountries.com/v3.1/region/${data.region}`);
    }
  };

  const showCounteryDataHandler = function (data) {
    setLink(`https://restcountries.com/v3.1/name/${data}`);
    setShowCounteryData((prev) => !prev);
  };

  const showMain = function (data) {
    setLink("https://restcountries.com/v3.1/all");
    setShowCounteryData((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      {showCounteryData && (
        <MainInfo
          onShowMain={showMain}
          onShowCountryData={showCounteryDataHandler}
          counteryData={counteryData}
        />
      )}

      {showCounteryData || (
        <div className="search__data">
          <FormSearch getEnteredData={getEnterDataHandler} />
          <Main
            onShowCountryData={showCounteryDataHandler}
            error={error}
            data={counteryData}
            loading={isLoading}
          />
        </div>
      )}
    </>
  );
}

export default App;
