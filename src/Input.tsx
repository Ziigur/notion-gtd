import React from "react";

interface IProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IProps) => {
  return (
    <input
      className="p-2 px-4 bg-gray-200 bg-opacity-50 rounded"
      placeholder={props.placeholder}
      type="text"
      value={props.value}
      onChange={props.onChange}
    />
  );
};
