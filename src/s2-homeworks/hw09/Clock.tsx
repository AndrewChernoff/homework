import React, {useEffect, useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [time, setTime] = useState<string>()

    const daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    useEffect(() => {
        setTime(getDateTime())
    },[])


    function getDateTime() {
        let now = new Date();
        let hour:number | string   = now.getHours();
        let minute:number | string = now.getMinutes();
        let second:number | string = now.getSeconds(); 
 
        if(hour.toString().length === 1) {
             hour = `0`+hour;
        }
        if(minute.toString().length === 1) {
             minute = '0'+minute;
        }
        if(second.toString().length === 1) {
             second = '0'+second;
        }   
        let dateTime = `${hour}:${minute}:${second}`
         return dateTime;
    }

    function getCurrentDate() {
        let now     = new Date(); 
        let year    = now.getFullYear();
        let month:number | string   = now.getMonth()+1; 
        let day :number | string     = now.getDate();
        if(month.toString().length === 1) {
             month = '0'+month;
        }
        if(day.toString().length === 1) {
             day = '0'+day;
        }  
        let currentDate = `${day}.${month}.${year}`  ///16.06.2022, June monthsInYear , ${monthsInYear[now.getMonth()]}
         return currentDate;
    }



    const start = () => {
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
        let timer: any = setInterval(() => {
            setTime(getDateTime()) 
        }, 1000)

        setTimerId(timer)
    }

    const stop = () => {
        // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
        clearInterval(timerId)
        setTimerId(undefined)

    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    const stringTime = time /* 'date->time' */ || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const stringDate = getCurrentDate() /* `${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()}` *//* 'date->date' */ || <br/> // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = daysInWeek[date.getDay()] /* 'date->day' */ || <br/> // пишут студенты
    const stringMonth = monthsInYear[new Date().getMonth()] || <br/> // пишут студенты    

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>{' '}
                            <span id={'hw9-date'}>{stringDate}, </span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={timerId ? true : false} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                    className={s.button}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId ? false : true} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                    className={s.button}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
