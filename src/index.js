function Index(){
    const weatherForm = document.getElementById("inputInfos");
    const cityInput = document.getElementById("cityInput");
    const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const timezoneApiKey = import.meta.env.VITE_TIMEZONE_API_KEY;
    const errorEmptyCity = document.getElementById("emptyCity");
    const errorCityNotFound = document.getElementById("cityNotFound");
    const errorUnknown = document.getElementById("unknownError");
    
    let cityHTML = document.getElementById("cityHTML");
    let temperatureHTML = document.getElementById("temperatureHTML");
    let humidityHTML = document.getElementById("humidityHTML");
    let speedHTML = document.getElementById("speedHTML");
    let cardHTML = document.querySelector(".card");
    let imgHTML = document.getElementById("imgHTML");
    let preCardHTML = document.getElementById("preCard");

    let celciusTemp;
    
    weatherForm.addEventListener("submit", event => {
            event.preventDefault();
    
            const cityName = cityInput.value;
            if(cityName){
                    errorEmptyCity.style.display = "none";
                    errorCityNotFound.style.display = "none";
                    errorUnknown.style.display = "none";
                    doResearch();
            }
            else{
                    errorEmptyCity.style.display = "block";
            }
    });
    
    async function doResearch(){
            try{
                    const city = cityInput.value
                    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}`);
    
                    if(!response.ok){
                            errorCityNotFound.style.display = "block";
                            throw new Error("Ocorreu um erro inesperado, tente novamente mais tarde. WeatherAPI error")
                    }
    
                    const data = await response.json();
                    updateHTML(data);
            }
            catch(error){
                    console.log(error.message)
            }
    }
    
    
    async function updateHTML(weatherData){
            const {name: city, wind: {speed}, main: {temp, humidity}, weather: [{id}], coord: {lon, lat}} = weatherData;
            try{
                    const response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${timezoneApiKey}&format=json&by=position&lat=${lat}&lng=${lon}`);
    
                    if(!response.ok){
                            errorUnknown.style.display = "block";
                            throw new Error("Ocorreu um erro inesperado, tente novamente mais tarde. TimeZoneAPI error")
                    }
    
                    const data = await response.json();
                    changeHTML(data);
            }
            catch(error){
                    console.log(error.message)
            }
            
            function changeHTML(dataTimeZone){
                    if(preCardHTML.style.display == "block"){
                            preCardHTML.style.display = "none";
                            cardHTML.style.display = "block";
                    }
                    const {zoneName: timezone} = dataTimeZone
                    celciusTemp = temp-273.17;
                    cityHTML.innerHTML = `${city}`;
                    temperatureHTML.innerHTML = `${celciusTemp.toFixed(1)}°C`;
                    speedHTML.innerHTML = `${speed} km/h`;
                    humidityHTML.innerHTML = `${humidity}%`;
                    updateImg(id, timezone);
            }
    }
    
    function updateImg(weatherId, timeZone){
            const date = new Date();
            const options = { timeZone, hour12: false, hour: '2-digit', minute: undefined, second: undefined };
            let hour = new Intl.DateTimeFormat('en-US', options).format(date);
            hour = hour.replace(/^0+/, '');
    
            switch(true){
                    case(weatherId >= 200 && weatherId <= 332):
                            cardHTML.style.backgroundColor = '#60aeec';
                            imgHTML.src = "/assets/thunderstorm-icon.svg";
                            break;
    
                    case(weatherId >= 300 && weatherId <= 531):
                            cardHTML.style.backgroundColor = '#60aeec'
                            imgHTML.src = "/assets/rain-icon.svg";
                            break;
    
                    case(weatherId >= 600 && weatherId <= 622):
                            cardHTML.style.backgroundColor = '#60aeec';
                            imgHTML.src = "/assets/snow-icon.svg";
                            break;
    
                    case(weatherId >= 700 && weatherId <= 781):
                            cardHTML.style.backgroundColor = '#a6cf7b';
                            imgHTML.src = "/assets/dust-icon.svg";
                            break;
    
                    case(weatherId >= 800 && weatherId <= 803 && hour >= 5 && hour <= 17):
                            cardHTML.style.backgroundColor = '#f5af4a';
                            imgHTML.src = "/assets/sun-icon.svg";
                            break;
    
                    case(weatherId >= 800 && weatherId <= 803 && (hour >= 18 && hour <= 24) || (hour >= 0 && hour <= 4)):
                            cardHTML.style.backgroundColor = '#3b4466';
                            imgHTML.src = "/assets/moon-icon.svg";
                            break;
    
                    case(weatherId === 804):
                            cardHTML.style.backgroundColor = '#60aeec';
                            imgHTML.src = "/assets/cloud-icon.svg";
                            break;
                    default:
                            cardHTML.style.backgroundColor = '#f5af4a';
                            imgHTML.src = "/assets/unknown-icon.svg";
                            break;
            }
    }
}

export default Index