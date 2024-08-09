import React from "react";

interface IInputProps {
  id: string;
  label?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Input: React.FC<IInputProps> = (props) => {
  const {
    id,
    label,
    name,
    value,
    defaultValue,
    onChange,
    placeholder,
    type,
    required,
    disabled,
    className,
    style,
  } = props;

  return (
    <section>
      {label && (
        <label
          htmlFor={label}
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={id}
        type={type || "text"}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`w-full border border-gray-300 rounded-md px-2 py-2 mt-1 ${className}`}
        style={style}
      />
    </section>
  );
};
