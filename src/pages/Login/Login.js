import React, { useState } from "react";
import style from "./Login.module.scss";
import classNames from "classnames/bind";
import logo from "../../../src/asset/adminlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/Button/Button";

const cx = classNames.bind(style);
export default function Login() {
  const [type, setType] = useState(false);
  const [show, setShow] = useState(false);
  const handleTurn = () => {
    setType(!type);
    setShow(!show);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("circle")}>
        <img src={logo} alt="" />
      </div>
      <form action="">
        <p className={cx("title")}>Employee Login</p>
        <div className={cx("input-form")}>
          <input
            type="email"
            placeholder="username"
            onChange={(e) => e.target.value}
          />
          {/* <p className={cx("error-text")}>123</p> */}
        </div>
        <div className={cx("input-password")}>
          <input
            type={type === false ? "password" : "text"}
            placeholder="password"
            onChange={(e) => e.target.value}
          />
          {/* <p className={cx("error-text")}>123</p> */}
          <div className={cx("show")}>
            <FontAwesomeIcon
              onClick={handleTurn}
              className={cx("eye")}
              icon={show === false ? faEyeSlash : faEye}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className={cx("btn-login")}>
          <Button btnlogin>LOGIN</Button>
        </div>
      </form>
    </div>
  );
}
