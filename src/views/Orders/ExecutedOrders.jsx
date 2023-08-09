import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import PageHeading from "../../components/page-heading";
import WithAuth from "../../components/withAuth";
import { fetchAllPortfolioStocks } from "../../redux/features/portfolioStock/portfolioStockSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const ExecutedOrders = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);
  const portfolioStocks = useSelector(
    (state) => state.portfolioStock.collection
  );

  useEffect(() => {
    dispatch(fetchAllPortfolioStocks({ user_id }));
  }, [dispatch, user_id]);

  return (
    <div className="container-fluid p-3">
      <Navbar />
      <PageHeading title={"Settled Orders"} />
     
      <div style={{ maxHeight: "70vh", overflow: "auto" }} className=" border">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Portfolio</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total value</th>
              {/* <th>Status</th> */}
              {/* <th>Order Type</th> */}
              <th>Tranasction Date</th>
            </tr>
          </thead>
          <tbody>
            {portfolioStocks.length > 0 &&
              portfolioStocks.map((order, index) => (
                <tr key={index}>
                  <td>{order.asset_name}</td>
                  <td>{order.portfolio_name}</td>
                  <td>{order.quantity}</td>
                  <td className="text-danger">{order.purchase_price}</td>
                  <td className="text-muted">{order.total_investment}</td>
                  {/* <td className={`text-${setColorOfOrderStatus(order.purchase_type)}`}>
                  {order.purchase_status}
                </td> */}
                  {/* <td className="text-muted">{order.purchase_type}</td> */}
                 
                  <td> {moment(order.purchase_date).format("HH:mm A MM/DD/YYYY")}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>
        {portfolioStocks.length === 0  && <span>You have no executed orders</span>}
      </div>
    </div>
  );
};

// function setColorOfOrderStatus(status) {
//   switch (status) {
//     case "Pending":
//       return "warning";
//     case "Failed":
//       return "danger";
//     case "Completed":
//       return "success";
//     default:
//       return "secondary";
//   }
// }
export default WithAuth(ExecutedOrders);
