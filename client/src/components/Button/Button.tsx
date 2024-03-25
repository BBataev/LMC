import { FC, MouseEventHandler } from 'react';

import './Button.css';

export interface IButtonProps {
  title: string;
  size?: "small" | "medium" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isLoading?: boolean;
  isDisabled?: boolean;
}

export const Button: FC<IButtonProps> = ({
  title,
  size= "medium",
  onClick,
  isLoading,
  isDisabled,
}) => {
  return (
    <button
      className="button"
      onClick={onClick}
      data-size={size}
      disabled={isDisabled || isLoading}
    >
      {isLoading ? "Загрузка..." : title}
    </button>
  );
};
