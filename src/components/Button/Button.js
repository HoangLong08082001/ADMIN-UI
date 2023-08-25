import React from "react";
import style from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);
export default function Button({
  children,
  btnlogin,
  onClick,
  to,
  href,
  logout,
  service,
  activeHome,
  btnmenu,
  login,
}) {
  let Comp = "button";
  const classes = cx("wrapper", {
    btnlogin,
    logout,
    service,
    activeHome,
    btnmenu,
    login,
  });
  const props = {
    onClick,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}
