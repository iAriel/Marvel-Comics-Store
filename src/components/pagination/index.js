import React from 'react'

import {Pages, Button} from './styles'

export default function Pagination({pages, setCurrentPage, currentPage}){
    
    return(
        <Pages>
            {Array.from(Array(pages), (item, index) =>{
                return <Button currentPage={currentPage} key={index} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))} >{index + 1}</Button>
            })}
        </Pages>
    )
}