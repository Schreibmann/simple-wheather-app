import * as React from 'react'
import { IWeather } from '../types'

const Card: React.FC<IWeather> = ({ weather, temp, humidity, pressure, wind, location }: IWeather) => (
    <>
        <h1>{location.state + ', ' + location.country}</h1>
        <img id='wicon' src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt='Weather icon' />
        <a>{weather.main + ', ' + weather.description}</a><br />
        <a>{'Temperature: ' + temp.celsius + ' C / ' + temp.farenheit + ' F '}</a><br />
        <a>{'Humidity: ' + humidity + '% '}</a><br />
        <a>{'Pressure: ' + pressure + ' P '}</a><br />
        <a>{'Wind: ' + wind.speed + ' m/s '}</a>
    </>
)

export default Card
