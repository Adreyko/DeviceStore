export const handleOpenHover = (
  event: React.MouseEvent<HTMLElement>,
  categoryId: string,
  setSelectedCategories:  React.Dispatch<React.SetStateAction<string | null>>,
  setAnchorEl:  React.Dispatch<React.SetStateAction<null | HTMLElement>>
) => {
  setSelectedCategories(categoryId);
  setAnchorEl(event.currentTarget);
};
