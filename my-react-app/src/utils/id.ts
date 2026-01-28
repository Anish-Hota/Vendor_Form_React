export function generateId(): string {
  const timestamp = Date.now();
  const randomStr = Math.random().toString(36).substring(2, 9);
  return `vendor_${timestamp}_${randomStr}`;
}
