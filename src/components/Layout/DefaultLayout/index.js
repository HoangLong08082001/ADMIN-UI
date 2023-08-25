import { React } from "react";
import style from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../components/Sidebar";
import Profile from "../components/Profile";

const cx = classNames.bind(style);
export default function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container")}>
        <Profile />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
