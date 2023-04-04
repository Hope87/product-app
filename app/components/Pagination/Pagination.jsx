import Button from '@/app/UI/Button/Button'
import React from 'react'
import css from './pagination.module.css'

function Pagination({currentPage, nextPage, prevPage}) {
  return (
    <div className={css.pagination}>
        <Button onClick={prevPage} text='Prev' color='default'/>
        <Button onClick={nextPage} text='Next' color='success'/>
        <input className={css.pageNumber} type='number' value={currentPage} readOnly/>
    </div>
  )
}

export default Pagination