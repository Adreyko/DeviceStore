export const handleMenuClose = (
  setSelectedCategories: React.Dispatch<React.SetStateAction<string | null>>,
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>
) => {
  setSelectedCategories(null);
  setAnchorEl(null);
};
