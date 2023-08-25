import React, { useState } from "react";
import style from "./Home.module.scss";
import classNames from "classnames/bind";
import Button from "../../components/Button/Button";
import Statistical from "./Statistical";
import Chart from "./Chart";

const cx = classNames.bind(style);
export default function Home() {
  const [open, setOpen] = useState(false);
  const handleChart = () => {
    setOpen(!open);
  };
  const handleStatis = () => {
    setOpen(!open);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("btn-service")}>
        {open === true ? (
          <Button service onClick={handleChart}>
            CHART
          </Button>
        ) : (
          <Button service activeHome onClick={handleChart}>
            CHART
          </Button>
        )}
        {open === true ? (
          <Button service activeHome onClick={handleStatis}>
            STATISTICAL
          </Button>
        ) : (
          <Button service onClick={handleStatis}>
            STATISTICAL
          </Button>
        )}
      </div>
      <div className={cx("service")}>
        {open === false ? <Chart /> : <Statistical />}
      </div>
    </div>
  );
}
