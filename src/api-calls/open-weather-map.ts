import { normalizeData } from '../utils/normalizer'
import { Coords } from '../types'

export const fetchWeather = (coordinates: Coords): Promise<any> => {
    const API_KEY = '162d261826deb4822f98308ba57d7990'
    const { latitude, longitude } = coordinates
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    return fetch(URL, {})
        .then(res => res.json())
        .then(data => {
            const normalizedData = normalizeData(data)
            return normalizedData
        })
        .catch(err => err)
}