import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./StockCircle.css";

const StockCircle = ({ stockName, icon }) => {
  return (
    <>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "#e39246", height: "30px", width: "30px" }}
      />
      <h6 className="text-start">{stockName}</h6>
    </>
  );
};

export default StockCircle;
