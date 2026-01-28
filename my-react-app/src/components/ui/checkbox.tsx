import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxProps {
  label: string;
  name: string;
  options: CheckboxOption[];
  selectedValues: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export function Checkbox({
  label,
  name,
  options,
  selectedValues,
  onChange,
  error,
  required = false,
}: CheckboxProps) {
  return (
    <div className="form_group">
      <label className={required ? 'required' : ''}>
        {label}
      </label>
      <div className="checkbox_group">
        {options.map((option) => (
          <label key={option.value} className="checkbox_label">
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={selectedValues.includes(option.value)}
              onChange={onChange}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="error_message">{error}</span>}
    </div>
  );
}