import { SelectChangeEvent } from "@mui/material";

export const handleCategoryChange = (
  event: SelectChangeEvent,
  setCategory: React.Dispatch<React.SetStateAction<string>>
) => {
  const category = event.target.value;
  setCategory((prev: any) => ({
    ...prev,
    category : category,
  }));
};
