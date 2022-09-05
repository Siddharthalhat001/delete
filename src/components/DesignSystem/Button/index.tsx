import React from 'react';
import clsx from 'clsx';
import Spinner from '../Spinner';

interface ButtonProps {
  variant: 'primary' | 'success' | 'error' | 'greyed';
  text: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  spinnerSize?: number;
  onClick?: (_: any) => void;
}

const Button: React.FC<ButtonProps> = ({
  variant, text, className, disabled, loading, spinnerSize, onClick,
}) => {
  return (
    <button className={clsx('d-btn', className && className, variant, disabled && 'disabled', loading && 'loading')} onClick={onClick} disabled={disabled} data-testid={`btn-${text.toLowerCase()}`}>{loading ? <Spinner size={spinnerSize || 20} /> : text}</button>
  );
};

export default Button;
