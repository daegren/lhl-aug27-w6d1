import React from 'react';

const Button = props => {
  let classNames = 'btn';

  if (props.primary) {
    classNames += ' btn-primary';
  }

  return <div className={classNames}>{props.title}</div>;
};
export default Button;
