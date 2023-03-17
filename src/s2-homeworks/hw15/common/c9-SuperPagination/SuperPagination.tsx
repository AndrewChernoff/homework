import React, { ChangeEvent } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination, SelectChangeEvent} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
    changeCount: (value: number) => void
    count: number
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15', changeCount, count
    }
) => {
    const lastPage = Math.ceil(totalCount / count) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {
        // пишет студент
        console.log(event);
        
        onChange(page, count)
    }

    const onChangeSelect = (event: any) => {
        // пишет студент
        console.log(event);
        changeCount(event)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                shape="rounded"
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                className={s.select}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
