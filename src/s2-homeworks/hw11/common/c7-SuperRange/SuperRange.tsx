import React from 'react'
import {Slider, SliderProps} from '@mui/material'

/* type PropsType = {
    change: ()
} */

const SuperRange: React.FC<SliderProps & any> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '165px',
                height: '4px',
                color: '#00CC22'
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
