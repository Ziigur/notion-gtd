import React from "react";
import "./View.css";

interface IProps {
  animateIn?: boolean;
  animateOut?: boolean;
  children?: React.ReactNode;
}

export const View = (props: IProps) => {
  return (
    <>
    {props.animateIn && (
      <div className="absolute left-0 top-0 w-full min-h-screen backdrop-fade-in"></div>
    )}
    <div
      className={
        "absolute left-0 top-0 w-full " +
        (props.animateIn ? "animate-in" : props.animateOut ? "animate-out" : "")
      }
    >
      <div className="min-h-screen">{props.children}</div>
    </div>
    </>
  );
};
