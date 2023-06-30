const PortfolioCard = ({ name, amountTraded, handleClick }) => {
  return (
    <div onClick={handleClick} className="row p-1  justify-content-center mb-2 align-items-center">
      <div className="card">
        <div className="card-body d-flex flex-row justify-content-between">
          <div
            style={{ width: "50px", height: "50px" }}
            className="rounded-circle bg-secondary "
          >
            <h3 className="pt-2 text-light">P</h3>
          </div>
          <div>
            <h3 className="card-title fs-6 fw-bold">Name of Portfolio</h3>
            <p className="card-text">{name}</p>
          </div>
          <div>
            <h3 className="card-title fs-6 fw-bold">Portfolio</h3>
            <p className="card-text">$ {amountTraded}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
