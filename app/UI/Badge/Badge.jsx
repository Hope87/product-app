import React from 'react'
import css from './badge.module.css'

function Badge({badge}) {
  return (
    <div className={css.badge}>{badge}</div>
  )
}

export default Badge