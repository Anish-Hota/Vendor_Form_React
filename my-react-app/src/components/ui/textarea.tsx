import React from 'react';

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  maxLength?: number;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export function Textarea({
  label,
  name,
  value,
  onChange,
  rows = 4,
  maxLength,
  error,
  required = false,
  placeholder,
}: TextareaProps) {
  return (
    <div className="form_group">
      <label className={required ? 'required' : ''}>
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
      />
      {error && <span className="error_message">{error}</span>}
    </div>
  );
}