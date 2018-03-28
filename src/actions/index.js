import axios from 'axios';

const API_KEY = '32270f8f2a62f1b55d8a6087a362683f';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// DEFINE VAR
export const FETCH_WEATHER = 'FETCH_WEATHER';

// EXPORT VAR AND CREATE ACTION
export function fetchWeather (city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
