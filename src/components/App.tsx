import * as React from 'react'
import Card from '../containers/Card'
import Preloader from './Preloader'
import { fetchWeather } from '../api-calls/open-weather-map'
import { IState } from '../types'

import './../assets/scss/App.scss'

const App: React.FC = () => {
    const [weather, setWeather] = React.useState<IState['weather'] | null>(null)
    const [error, setError] = React.useState<IState['error'] | null>(null)

    const getWeather = (): void => {
        if (!navigator.geolocation) {
            setError('Ваше устройство не поддерживает определение геопозиции!')
        } else {
            navigator.geolocation.getCurrentPosition(position => {
                fetchWeather(position.coords)
                    .then(data => setWeather(data))
            })
        }
    }

    React.useEffect(() => {
        getWeather()
    }, [])

    return (
        <div className='app'>
            {
                error ?
                    <h1>{error}</h1>
                    : weather ?
                        <Card {...weather} />
                        : <Preloader text='Loading' />
            }
        </div>
    )
}

export default App
