import React from "react";
import style from "./Chart.module.scss";
import classNames from "classnames/bind";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
  ComposedChart,
  YAxis,
  Line,
} from "recharts";
const cx = classNames.bind(style);
export default function Chart() {
  const data = [
    { name: "Vung Tau", cout: 100 },
    { name: "Phan Thiet", cout: 200 },
    { name: "Binh Dinh", cout: 300 },
    { name: "Ha Noi", cout: 900 },
    { name: "Ca Mau", cout: 50 },
  ];
  return (
    <div className={cx("wrapper")}>
      <div className={cx("left")}>
        <div className={cx("up")}>
          <p>PIE CHART</p>{" "}
          <PieChart width={400} height={300}>
            <Pie
              dataKey="cout"
              isAnimationActive={false}
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className={cx("down")}>
          <p>Tiny Bar Chart</p>
          <div className="chart-2">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="cout"
                fill="#FF2D00"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </div>
        </div>
      </div>
      <div className={cx("right")}>
        <div className={cx("chart-1")}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="cout" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
