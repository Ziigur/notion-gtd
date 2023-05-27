import React from "react";

interface IProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = (props: IProps) => {
  return (
    <button
      className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
