import React from "react";
import SalesPiechart from "../../components/Charts/Sales/SalesPiechart";
import StocksPieChart from "../../components/Charts/Stock/StockPieChart";
import "./Statistics.scss";

const Statistics = () => {
  return (
    <div className="statistics">
      <div className="sales">
        <h1>Sales Chart</h1>
        <SalesPiechart />
      </div>
      <div className="stock">
        <h1>Stocks Chart</h1>
        <StocksPieChart />
      </div>
    </div>
  );
};
export default Statistics;
