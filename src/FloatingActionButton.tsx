import React from "react";

interface IProps {
  children?: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const FloatingActionButton = (props: IProps) => {
  return (
    <button
      className="rounded-full bg-blue-600 text-white flex justify-center items-center w-20 h-20"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
