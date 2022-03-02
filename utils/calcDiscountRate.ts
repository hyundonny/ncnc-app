export const calcDiscountRate = (
  originalPrice: number,
  sellingPrice: number,
) => {
  return Math.floor(((originalPrice - sellingPrice) / originalPrice) * 100);
};
