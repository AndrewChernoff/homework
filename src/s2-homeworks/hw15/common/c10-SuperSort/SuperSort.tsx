import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// добавить в проект иконки и импортировать
const downIcon = <ArrowDropDownIcon style={{color: 'grey'}}/>
const upIcon = <ArrowDropUpIcon style={{color: 'grey'}}/>
const noneIcon = <UnfoldMoreIcon style={{color: 'grey'}}/>

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    //return up  исправить
    return up === sort ?  down : down === sort ? '' : up
    /* return sort === '' ? down : up === sort ? '' : down */
    //return sort === '' ? down : up === sort ? '' : down
    //return sort === '' ? down : sort === up ? '' : down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {icon} {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
