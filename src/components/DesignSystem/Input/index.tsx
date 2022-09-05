import React from 'react';
import clsx from 'clsx';

interface InputProps {
  variant: 'text' | 'password' ;
  name: string;
  className?: string;
  placeholder?: string;
  type?: string;
  error?: boolean;
  errorMessage?: string;
  errorMessageClass?: string;
  disabled?: boolean;
  value?: any;
  onChange?: (_: any, name: string) => void;
  onBlur?: (_: any) => void;
  onKeyDown?: (_: any) => void;
}

const Input: React.FC<InputProps> = ({
  variant, placeholder, className, type, name, error, errorMessage, errorMessageClass, disabled, value, onChange, onBlur, onKeyDown,
}) => {
  if (variant === 'text' || variant === 'password') {
    return (
      <>
        <input
          className={clsx('d-input', error && 'd-input-error', className, disabled && 'disabled')}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={(e) => onChange && onChange(e, name)}
          onBlur={onBlur}
          onKeyDown={onKeyDown}
          data-testid={`input-${name}-${value}`}
        />

        {errorMessage && <label className={clsx('d-error', errorMessageClass)}>{errorMessage}</label>}
      </>
    );
  }

  return null;
};

export default Input;
