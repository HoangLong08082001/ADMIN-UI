import React from "react";
import style from "./Statistical.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faTicket,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
export default function Statistical() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("new-price")}>
        <p>150</p>
        <span>Vua dat tour</span>
        <FontAwesomeIcon
          className={cx("icon")}
          icon={faPlane}
        ></FontAwesomeIcon>
      </div>
      <div className={cx("best-price")}>
        <p>10.000.000</p>
        <span>Hoa don lon nhat</span>
        <FontAwesomeIcon
          className={cx("icon")}
          icon={faTicket}
        ></FontAwesomeIcon>
      </div>
      <div className={cx("total-register")}>
        <p>20</p>
        <span>Nguoi da dang ky</span>
        <FontAwesomeIcon className={cx("icon")} icon={faUser}></FontAwesomeIcon>
      </div>
      <div className={cx("total-price")}>
        <p>150.000.000</p>
        <span>Tong hoa don da thanh toan</span>
        <FontAwesomeIcon
          className={cx("icon")}
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}
