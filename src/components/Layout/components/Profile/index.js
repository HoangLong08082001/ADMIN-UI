import React, { useState } from "react";
import style from "./Profile.module.scss";
import classNames from "classnames/bind";
import avatar from "../../../../../src/asset/avatar.png";
import Dropdown from "./Dropdown";
const cx = classNames.bind(style);
export default function Profile() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={cx("wrapper")}>
      <p>Hoang long</p>
      <div className={cx("circle")} onClick={handleOpen}>
        <img src={avatar} alt="" />
      </div>
      {open && <Dropdown />}
    </div>
  );
}
