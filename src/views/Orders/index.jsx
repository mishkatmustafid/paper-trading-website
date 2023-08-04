import React from 'react';
import Navbar from '../../components/navbar';
import PageHeading from '../../components/page-heading';


const orders = [
  {
    stock: 'AMZ',
    quantity: 100,
    price: 3500.25,
    total: 350025.00,
    status: 'Pending',
    date: '2023-06-27',
  },
  {
    stock: 'GOOGL',
    quantity: 50,
    price: 2500.50,
    total: 125025.00,
    status: 'Completed',
    date: '2023-06-28',
  },
  {
    stock: 'IBM',
    quantity: 30,
    price: 150.75,
    total: 4522.50,
    status: 'Pending',
    date: '2023-06-29',
  },
  {
    stock: 'MS',
    quantity: 75,
    price: 300.80,
    total: 22560.00,
    status: 'Completed',
    date: '2023-06-30',
  },
  {
    stock: 'AAPL',
    quantity: 200,
    price: 150.50,
    total: 30100.00,
    status: 'Pending',
    date: '2023-07-01',
  },
  {
    stock: 'FB',
    quantity: 80,
    price: 350.20,
    total: 28016.00,
    status: 'Completed',
    date: '2023-07-02',
  },
  {
    stock: 'TSLA',
    quantity: 150,
    price: 900.75,
    total: 135112.50,
    status: 'Failed',
    date: '2023-07-03',
  },
  {
    stock: 'NFLX',
    quantity: 40,
    price: 550.35,
    total: 22014.00,
    status: 'Completed',
    date: '2023-07-04',
  },
  // Add more stocks as needed
];


const Orders = () => {
  return (
    
    <div className="container-fluid">
      <Navbar />
      <PageHeading title={"Buy and Sell Orders"} />
<div className='container border pt-4'>

      <table className="table table-striped">
      <thead>
          <tr>
            <th>Stock</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.stock}</td>
              <td>{order.quantity}</td>
              <td className="text-danger">{order.price}</td>
              <td className="text-muted">{order.total}</td>
              <td className={`text-${setColorOfOrderStatus(order.status)}`}>{order.status}</td>
              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
    </div>
  );
};


function setColorOfOrderStatus (status){
  switch(status){
    case "Pending":
      return "warning"
    case "Failed":
      return "danger"  
     case "Completed":
      return "success" 
    default: return "secondary"  
  }
}
export default Orders;