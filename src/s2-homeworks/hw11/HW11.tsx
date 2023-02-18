import React, { useState } from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import { restoreState } from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'
import Slider from '@mui/material/Slider'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

function HW11() {
    // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
    const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
    const [value2, setValue2] = useState(restoreState<number[]>('hw11-value2', [0, 100]))

    const handleChange = (event: Event, newValue: number | number[]) => {        
        if (Array.isArray(newValue)) {
            setValue1(newValue[0])
            setValue2(newValue as number[])
          } else {
            setValue1(newValue)
            let newValue2 = value2.map((el,i) => i === 0 ? newValue: el) ///new value for 'value2'
            setValue2(newValue2)
          }
      };

    return (
        <div id={'hw11'}>
            <div className={s2.hwTitle}>Homework #11</div>

            <div className={s2.hw}>
                <div className={s.container}>
                    <div className={s.wrapper}>
                        <span id={'hw11-value'} className={s.number}>{value1}</span>
                        <SuperRange
                            id={'hw11-single-slider'}
                            getAriaLabel={() => 'Temperature range'}
                            value={value1}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            //getAriaValueText={valuetext}
                            // сделать так чтоб value1 изменялось // пишет студент

                        />
                    </div>
                    <div className={s.wrapper}>
                        <span id={'hw11-value-1'} className={s.number}>{value1}</span>
                         <SuperRange
                            id={'hw11-double-slider'}
                            // сделать так чтоб value1/2 изменялось // пишет студент
                        getAriaLabel={() => 'Temperature range'}
                        value={value2}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        />

                        <span id={'hw11-value-2'} className={s.number}>{value2[1]}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HW11
