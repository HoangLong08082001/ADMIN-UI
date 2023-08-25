import React from "react";
import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faTicket,
  faUser,
  faPlane,
  faList,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../../Button/Button";
const cx = classNames.bind(style);
export default function Sidebar() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title-dash")}>
        <p>ADMIN FOR TOT EMPLOYEE</p>
      </div>
      <div className={cx("list-menu")}>
        <p>Main dashboard</p>
        <ul className={cx("item-menu")}>
          <li>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faHome}
            ></FontAwesomeIcon>
            <Button btnmenu to="/home">
              TRANG CHU
            </Button>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faUser}
            ></FontAwesomeIcon>
            <Button btnmenu to="/home">
              NHAN VIEN
            </Button>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faTicket}
            ></FontAwesomeIcon>
            <Button btnmenu to="/home">
              HOA DON
            </Button>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faPlane}
            ></FontAwesomeIcon>
            <Button btnmenu to="/home">
              TOURS
            </Button>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faMoneyBill}
            ></FontAwesomeIcon>
            <Button btnmenu to="/home">
              PHIEU DAT TOUR
            </Button>
          </li>
          <li>
            <FontAwesomeIcon
              className={cx("icon-menu")}
              icon={faList}
            ></FontAwesomeIcon>
            <Button btnmenu to="/home">
              VI TRI QUYEN
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
