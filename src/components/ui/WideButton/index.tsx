import React from 'react';
import './styles.scss';

interface IWideButton {
  children: string;
  color: string;
  onClick?: () => void;
  type: 'button' | 'submit' | 'reset';
}

export const WideButton: React.FC<IWideButton> = ({
  type = 'button',
  onClick,
  children,
  color,
}) => (
  <button
    /* eslint-disable react/button-has-type */
    type={type}
    /* eslint-enable react/button-has-type */
    onClick={onClick}
    style={{ backgroundColor: color }}
    className="button"
  >
    {children}
  </button>
);
