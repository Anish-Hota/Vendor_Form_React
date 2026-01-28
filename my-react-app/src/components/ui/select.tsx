import React from 'react';

interface SelectProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<{ value: string; label: string }>;
  error?: string;
  required?: boolean;
}

export function Select({
  label,
  name,
  value,
  onChange,
  options,
  error,
  required = false,
}: SelectProps) {
  return (
    <div className="form_group">
      <label className={required ? 'required' : ''}>
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="error_message">{error}</span>}
    </div>
  );
}