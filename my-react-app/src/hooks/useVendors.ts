import { useCallback } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { generateId } from '../utils/id';
import type { VendorData } from '../types/vendor.types';

const STORAGE_KEY = 'vendor_management_data';

export function useVendors() {
  const [vendors, setVendors] = useLocalStorage<VendorData[]>(STORAGE_KEY, []);

  const addVendor = useCallback(
    (vendorData: Omit<VendorData, 'id'>): void => {
      const newVendor: VendorData = {
        ...vendorData,
        id: generateId(),
      };
      setVendors([...vendors, newVendor]);
    },
    [vendors, setVendors],
  );

  const updateVendor = useCallback(
    (id: string, updatedData: Omit<VendorData, 'id'>): void => {
      setVendors(vendors.map((vendor) => (vendor.id === id ? { ...updatedData, id } : vendor)));
    },
    [vendors, setVendors],
  );

  const deleteVendor = useCallback(
    (id: string): void => {
      setVendors(vendors.filter((vendor) => vendor.id !== id));
    },
    [vendors, setVendors],
  );
  const getVendorById = useCallback(
    (id: string): VendorData | undefined => {
      return vendors.find((vendor) => vendor.id === id);
    },
    [vendors],
  );
  const clearAllVendors = useCallback((): void => {
    setVendors([]);
  }, [setVendors]);

  return {
    vendors,
    addVendor,
    updateVendor,
    deleteVendor,
    getVendorById,
    clearAllVendors,
  };
}
