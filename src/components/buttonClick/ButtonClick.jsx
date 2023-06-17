import React from 'react'

const ButtonClick = ({className,onClick,type,title}) => {
  return (
    <button onClick={onClick} type={type} className={className}>{title}</button>
  )
}

export default ButtonClick
