import React from 'react';

const PortfolioCard = () => {
  const portfolioName = 'Tech Stocks'; // Example portfolio name
  const portfolioAmount = 10000; // Example portfolio amount

  // Extract the first letter of the portfolio name
  const firstLetter = portfolioName.charAt(0).toUpperCase();

  return (
    <div  className="card bg-warning">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="rounded-circle bg-light p-3">
          <span className="letter ">{firstLetter}</span>
        </div>
        <div className="portfolio-info text-right">
          <h5 className="portfolio-name">{portfolioName}</h5>
          <p className="portfolio-amount">${portfolioAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;