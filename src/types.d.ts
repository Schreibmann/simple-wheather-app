export interface IWeather {
    weather: {
        id: number
        main: string
        description: string
        icon: string,
    }
    temp: {
        celsius: number
        farenheit: number,
    },
    humidity: number
    pressure: number
    wind: {
        speed: number
        deg: number,
    },
    location: {
        state: string
        country: string,
    }
}

export interface IState {
    weather: IWeather | null
    error: string | null
}

export interface IPreloaderProps {
    color?: string
    text?: string
    fontSize?: string
}

export interface Coords {
    latitude: number
    longitude: number
}