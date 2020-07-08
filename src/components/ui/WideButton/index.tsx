import React from 'react';
import './styles.scss';

interface IWideButton {
  children: string,
  color: string,
  onClick: () => void
}

export const WideButton: React.FC<IWideButton> = ({ onClick, children, color }) => (
  <button type="button" onClick={onClick} style={{ backgroundColor: color }} className="button">
    { children }
  </button>
);
