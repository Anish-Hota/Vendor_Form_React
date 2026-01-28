import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}

export function Radio({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
}: RadioProps) {
  return (
    <div className="form_group">
      <label className={required ? 'required' : ''}>
        {label}
      </label>
      <div className="radio_group">
        {options.map((option) => (
          <label key={option.value} className="radio_label">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              required={required}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      {error && <span className="error_message">{error}</span>}
    </div>
  );
}