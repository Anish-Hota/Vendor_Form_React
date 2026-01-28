import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

export function Button({
  type = 'button',
  variant = 'primary',
  onClick,
  children,
}: ButtonProps) {
  const className = variant === 'primary' ? 'btn_primary' : 'btn_secondary';

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}