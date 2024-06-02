import "./Card.css";

function Card() {
  return (
    <div className="card" id="cardHTML" style={{ display: "none" }}>
      <div className="top-infos">
        <h1 className="city-name" id="cityHTML">
          Why you looking here bro 🤨
        </h1>
        <div className="top-infos">
          <img
            src="/assets/sun-icon.svg"
            alt="weather icon"
            className="weather-icon-type"
            id="imgHTML"
          />
          <h2 className="temperature" id="temperatureHTML">
            30°C
          </h2>
        </div>
      </div>
      <div className="bottom-infos">
        <div className="left-infos">
          <div className="wind-infos">
            <img
              src="/assets/wind-icon.svg"
              alt="Ícone de velocidade do vento"
              className="weather-icon wind-icon"
            />
            <p className="wind-speed text-info" id="speedHTML">
              10 km/h
            </p>
          </div>
          <p className="info-about">Velocidade do vento</p>
        </div>
        <div className="right-infos">
          <div className="humidity-infos">
            <img
              src="/assets/humidity-icon.svg"
              alt="Ícone de porcentagem de humidade"
              className="weather-icon humidity-icon"
            />
            <p className="humidity text-info" id="humidityHTML">
              0%
            </p>
          </div>
          <p className="info-about">Umidade do ar</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
