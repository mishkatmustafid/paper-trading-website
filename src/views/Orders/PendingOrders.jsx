import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import PageHeading from "../../components/page-heading";
import WithAuth from "../../components/withAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrders } from "../../redux/features/order/orderSlice";
import moment from "moment";

const ExecutedOrders = () => {
  const dispatch = useDispatch();
  const user_id = useSelector((state) => state.auth.user_id);
  const orders = useSelector((state) => state.order.collection);

  useEffect(() => {
    dispatch(fetchAllOrders({user_id}));
  }, [dispatch, user_id]);
  return (
    <div className="container-fluid p-3">
      <Navbar />
      <PageHeading title={"Buy and Sell Orders"} />
      <div style={{maxHeight: "70vh", overflow: "auto"}} className=" border">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Portfolio</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total value</th>
              {/* <th>Status</th> */}
              <th>Order Type</th>
              <th>Tranasction Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 && orders.map((order, index) => (
              <tr key={index}>
                <td>{order.asset_name}</td>
                <td>{order.portfolio_name}</td>
                <td>{order.quantity}</td>
                <td className="text-danger">{order.transaction_price}</td>
                <td className="text-muted">{order.transaction_value}</td>
                {/* <td className={`text-${setColorOfOrderStatus(order.transaction_type)}`}>
                  {order.transaction_status}
                </td> */}
                <td className="text-muted">{order.transaction_type}</td>
                <td> {moment(order.transaction_date).format("HH:mm A MM/DD/YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        {orders.length === 0 && <span>You have no pending orders</span>}
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
