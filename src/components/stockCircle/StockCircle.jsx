import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./StockCircle.css";

const StockCircle = ({ stockName, icon }) => {
  return (
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-2 p-0">
          <FontAwesomeIcon
            icon={icon}
            style={{ color: "#e39246", height: "30px", width: "30px" }}
          />
        </div>
        <div className="col-10 p-0">
          <h6 className="text-start">{stockName}</h6>
        </div>
      </div>
    </div>
  );
};

export default StockCircle;
