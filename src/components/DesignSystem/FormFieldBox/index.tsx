import clsx from 'clsx';
import React from 'react';

interface FormFieldBoxProps {
  label: string;
  input: React.ReactNode;
  required?: boolean;
  rootClass?: string;
}

const FormFieldBox: React.FC<FormFieldBoxProps> = ({
  label, input, required, rootClass,
}) => {
  return (
    <div className={clsx('d-form-field-root', rootClass)}>
      <label>
        {label}
        {' '}
        {required && <span className="required-mark">*</span>}
      </label>
      {input}
    </div>
  );
};

export default FormFieldBox;
