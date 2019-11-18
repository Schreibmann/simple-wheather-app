import { IWeather } from '../types'

function convertTemperature(kelvins) {
    const temp = {
        celsius: parseFloat((kelvins - 273.15).toFixed(1)),
        farenheit: parseFloat(((1 * kelvins - 273.15) * 9 / 5 + 32).toFixed(1)),
    }
    return temp
}

export function normalizeData(responce: any): IWeather {
    return {
        weather: { ...responce.weather[0] },
        temp: convertTemperature(responce.main.temp),
        humidity: responce.main.humidity,
        pressure: responce.main.pressure,
        wind: { ...responce.wind },
        location: {
            state: responce.name,
            country: responce.sys.country,
        },
    }
}
