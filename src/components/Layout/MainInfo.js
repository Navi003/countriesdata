export default function MainInfo({ counteryData, onShowMain }) {
  const data = counteryData[0];

  const currencies = data.currencies;
  const currecy = Object.entries(currencies);

  const languages = data.languages;
  const language = Object.entries(languages);
  const borders = data?.borders;

  return (
    <div className="inside">
      <div className="container country__info">
        <button onClick={onShowMain} className="btn">
          Back
        </button>
        <div className="country__img">
          <img src={data?.flags.png} />
        </div>
        <div className="country__content">
          <h2>{data.name?.common}</h2>
          <div className="country__content__name-data">
            <ul>
              <li>
                Name: <span>{data?.name.common}</span>
              </li>
              <li>
                Population: <span>{data?.population}</span>
              </li>
              <li>
                Region: <span>{data?.region}</span>
              </li>
              <li>
                Sub-Region: <span>{data?.subregion}</span>
              </li>
              <li>
                Capital: <span>{data.capital}</span>
              </li>
            </ul>
          </div>
          <div className="country__content__currency">
            <ul>
              <li>
                Currency: <span>{currecy[0][0]}</span>
              </li>
              <li>
                Domain: <span>{data.cca2}</span>
              </li>
              <li>
                Languages:
                <span>{language[0][1]}</span>
              </li>
            </ul>
          </div>
          <div className="country__borders">
            <h4>Borders</h4>

            {borders ? (
              borders.map((b) => {
                return <span className="country__border">{b}</span>;
              })
            ) : (
              <span className="country__border">no borders found</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
