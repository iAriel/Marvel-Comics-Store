import React from 'react'

import {Pages} from './styles'

export default function Pagination({postPerPage, totalPost, paginate}){
    const pageNumbers = [];
    const pages = Math.ceil(totalPost / postPerPage)
    pageNumbers.push(pages)

    return(
        <div>
            <Pages>
                {Array.from(Array(pages), (item, index) => {
                    return <button>{index}</button>
                })}
            </Pages>
        </div>
    )
}