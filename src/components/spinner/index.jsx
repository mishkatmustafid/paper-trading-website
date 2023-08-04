import React from 'react';

const SpinnerLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center"  style={{height: "1vh"}}>
      <div className="spinner-border text-light" role="status">
        <span style={{fontSize: "12px"}} className="visually ">...</span>
      </div>
    </div>
  );
};

export default SpinnerLoader;
