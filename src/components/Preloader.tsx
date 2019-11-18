import * as React from 'react'
import { IPreloaderProps } from '../types'
import './../assets/scss/Preloader.scss'

const Preloader: React.FC<IPreloaderProps> = ({ color, text, fontSize }: IPreloaderProps) => {

    const style = {
        text,
        color,
        fontSize,
    }

    return (
        <div className='PreLoading-Text'>
            <div style={style} className='PreLoading-Text-wrapper'>
                {text}
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        </div>
    )
}

Preloader.defaultProps = {
    color: '#FF4601',
    text: 'Loading',
    fontSize: '1.5em',
}

export default Preloader
