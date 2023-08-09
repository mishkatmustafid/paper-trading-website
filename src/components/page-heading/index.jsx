import React from 'react'

const PageHeading = ({title}) => {
  return (
    <div style={{paddingTop: "100px"}}>
      <h5 className="text-center">{title}</h5>
      <hr className='mx-2'/>
    </div>
  )
}

export default PageHeading
