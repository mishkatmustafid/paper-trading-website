import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./StockCircle.css"

const StockCircle = ({stockName, icon}) => {
    return(
        <div>
        <div className="d-flex align-items-center justify-content-center rounded-circle stock-logo mb-1">
            <FontAwesomeIcon icon={icon} style={{color: "#e39246", height: "50px", width: "50px"}} />
        </div>
        <p className=" text-center">{stockName}</p>
        </div>
    )
};

export default StockCircle;
