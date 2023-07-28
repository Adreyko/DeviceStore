import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

type Sort = {
  sortBy: string;
  setSortedBy: any;
};
const Sort: React.FC<Sort> = ({ sortBy, setSortedBy }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setSortedBy(event.target.value);
  };
  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          id="demo-simple-select-standard-label"
          sx={{ color: "white" }}
        >
          Sorty By:
        </InputLabel>
        <Select
          MenuProps={{
            sx: {
              "&& .Mui-selected": {
                backgroundColor: "#bb3033",
              },
            },
          }}
          sx={{ color: "white" }}
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={sortBy}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"asc"}>Lowest price</MenuItem>
          <MenuItem value={"desc"}>Higher price</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default Sort;
