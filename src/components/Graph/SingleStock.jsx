import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SingleStock = ({ data, title }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h6>{title}</h6>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis
                dataKey="month"
                label={{
                  value: "Month",
                  position: "insideBottom",
                  offset: 2,
                }}
              />
              <YAxis
                label={{ value: "Price", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Line type="monotoneX" dataKey="price" stroke="blue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SingleStock;
