import { SelectChangeEvent } from "@mui/material";

export const handleCategoryChange = (
  event: SelectChangeEvent,
  setCategory: React.Dispatch<React.SetStateAction<string>>
) => {
  setCategory(event.target.value as string);
};
