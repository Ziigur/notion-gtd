import React from 'react';

interface IProps {
  children?: React.ReactNode 
}

export const FloatingActionButtonContainer = (props: IProps) => {
  return (
    <div className="fixed bottom-0 right-0 p-8">
      {props.children}
    </div>
  );
};
