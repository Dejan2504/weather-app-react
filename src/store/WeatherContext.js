import { createContext } from "react";

export const WeatherContext = createContext({latitude: 0, longitude: 0, weatherData: {}});