export interface FormErrors {
  [key: string]: string;
}

export interface FormMode {
  isEdit: boolean;
  editingId: string | null;
}
