import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if (action.payload === 'up') {
                return [...state.sort((a, b) => a.name.localeCompare(b.name))]

            } else {
                return [...state.sort((a, b) => b.name.localeCompare(a.name))]

            }
            }
            
        case 'check': {

            return [...state.filter(el => el.age > action.payload)] 
        }
        default:
            return state
    }
}

/* export const sortUpAC = () => ({type:'sort'});
export const checkAC = (payload:number) => ({type:'check', payload});
 */