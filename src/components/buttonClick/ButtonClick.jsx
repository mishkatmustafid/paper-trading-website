import React from 'react'

const ButtonClick = ({className,type,title}) => {
  return (
    <button type={type} className={className}>{title}</button>
  )
}

export default ButtonClick
