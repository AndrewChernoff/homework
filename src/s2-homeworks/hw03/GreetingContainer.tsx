import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (value: string) => void // need to fix any
}

type ErrorType = '' |'Ошибка! Введите имя!'

export const pureAddUser = (name: string, setError: (value: ErrorType) => void, setName: (value: string) => void, addUserCallback: any) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут???
    if(!name.trim() && name.length >= 0) {
        setError('Ошибка! Введите имя!')
    } else {
        addUserCallback(name);
    setName('');
    setError('')
    }
}

export const pureOnBlur = (name: string, setError: (value: ErrorType) => void) => { // если имя пустое - показать ошибку
    if(!name.trim() && name.length >= 0) {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => { // если нажата кнопка Enter - добавить
if(e.key === 'Enter') {
    addUser()
}
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<ErrorType>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix
        !name.trim() && name.length >= 0 ? setError('Ошибка! Введите имя!') : setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName = users.length > 0 ? users[users.length-1].name : null // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
