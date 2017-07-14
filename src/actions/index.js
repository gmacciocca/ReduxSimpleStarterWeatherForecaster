import axios from "axios";
const API_KEY = "1bb27d173552f3142b579435476d8412";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}


//  api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1bb27d173552f3142b579435476d8412
