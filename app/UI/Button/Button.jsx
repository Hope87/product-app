import React from 'react'
import css from './button.module.css'
import clsx from 'clsx'


function Button({onClick, text, color, display = '', size = ''}) {
  console.log(display);
  return (
    <button className={clsx(css.btn, {
      [css.blue]: color === 'default',
      [css.green]: color === 'success',
      [css.red]: color === 'danger',
      [css.block]: display === 'block',
      [css.btnSecond]: size === 'big',
    })} onClick={onClick}>{text}</button>
  )
}

export default Button