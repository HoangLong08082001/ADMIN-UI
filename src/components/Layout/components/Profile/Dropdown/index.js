import React from "react";
import style from "./Dropdown.module.scss";
import classNames from "classnames/bind";
import Button from "../../../../Button/Button";

const cx = classNames.bind(style);
export default function Dropdown() {
  return (
    <div className={cx("wrapper")}>
      <ul>
        <li className={cx("detail")}>Detail</li>
        <li className={cx("logout")}>
          <Button to="/" logout>
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
}
