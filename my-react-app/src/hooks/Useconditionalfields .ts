import { useState, useCallback } from 'react';

export function useConditionalFields() {
  const [showGstField, setShowGstField] = useState(false);
  const [showRegistrationField, setShowRegistrationField] = useState(false);

  const handleBusinessTypeChange = useCallback((businessType: string): void => {
    const needsRegistration = ['partnership', 'private-limited', 'public-limited', 'llp'].includes(
      businessType,
    );
    setShowRegistrationField(needsRegistration);
  }, []);

  const handleTaxStatusChange = useCallback((taxStatus: string): void => {
    setShowGstField(taxStatus === 'registered');
  }, []);

  return {
    showGstField,
    showRegistrationField,
    handleBusinessTypeChange,
    handleTaxStatusChange,
  };
}
