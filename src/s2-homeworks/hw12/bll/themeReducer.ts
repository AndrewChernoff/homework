type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export type StateType = {
    themeId: number
}

const initState: StateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => {
    switch (action.type) {
        case 'SET_THEME_ID': 
        return {...state, themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const
