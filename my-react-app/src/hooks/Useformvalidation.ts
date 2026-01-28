import { useState, useCallback } from 'react';
import type { VendorData } from '../types/vendor.types';

export interface FormErrors {
  [key: string]: string;
}

export function useFormValidation() {
  const [errors, setErrors] = useState<FormErrors>({});

  const setFieldError = useCallback((field: string, error: string): void => {
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  }, []);

  const clearFieldError = useCallback((field: string): void => {
    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
  }, []);
  const clearAllErrors = useCallback((): void => {
    setErrors({});
  }, []);
  const hasErrors = useCallback((): boolean => {
    return Object.keys(errors).length > 0;
  }, [errors]);
  const getFieldError = useCallback(
    (field: string): string => {
      return errors[field] || '';
    },
    [errors],
  );

  const validateField = useCallback(
    (field: keyof VendorData, value: unknown, validator: (val: unknown) => string): boolean => {
      const error = validator(value);
      if (error) {
        setFieldError(field, error);
        return false;
      }
      clearFieldError(field);
      return true;
    },
    [setFieldError, clearFieldError],
  );

  return {
    errors,
    setFieldError,
    clearFieldError,
    clearAllErrors,
    hasErrors,
    getFieldError,
    validateField,
  };
}
