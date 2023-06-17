import React from 'react'

const PageHeading = ({title}) => {
  return (
    <div className='p-2'>
      <h3 className="text-center">{title}</h3>
      <hr className='mx-5'/>
    </div>
  )
}

export default PageHeading
