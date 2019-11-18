import * as React from 'react'
import App from '../components/App'
import { hot } from 'react-hot-loader'

const Container: React.FC = () => (
    <div className='container'>
        <App />
        <p>Powered by
            <a className='link' href='https://openweathermap.org/'>
                <img src='https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png' width='128' height='54' alt='openweather' className='img-responsive' />
            </a>
        </p>
    </div >
)

declare let module: object

export default hot(module)(Container)
