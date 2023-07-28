import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useAppSelector } from "@/redux/hooks/redux-hook";
import SearchDevices from "./SearchDevices/SearchDevices";
import { Typography } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
const SearchInput = () => {
  const allDevices = useAppSelector((device) => device.devices.devices);
  const [text, setText] = useState("");
  const findElements = allDevices.filter((el) => {
    if (text !== "") {
      return el.name.toLowerCase().includes(text.toLowerCase());
    } else {
      return "";
    }
  });

  const findedEl = findElements.map((el) => (
    <SearchDevices
      key={el.id}
      name={el.name}
      image={el.image}
      price={el.price}
      description={el.description}
      category={el.category}
      availability={el.availability}
      id={el.id}
      amount={el.amount}
    />
  ));

  return (
    <Box
      sx={{
        background: "#1d1d1d",
        padding: "20px",
        overflow: "scroll",
        height: "500px",
        overflowX: "hidden",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <SearchIcon sx={{ fontSize: "2rem" }} />
        <TextField
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="standard-basic"
          inputProps={{ sx: { color: "white" } }}
          variant="standard"
          sx={{
            color: "white",
            flex: 1,
            marginLeft: "10px",
            borderBottom: "1px solid white",
          }}
        />
      </Box>

      {findElements.length ? (
        findedEl
      ) : (
        <Box
          sx={{
            marginTop: "10%",
            marginX: "30%",
            width: "100%",
            display: "flex",
          }}
        >
          <Typography component="h2" variant="h2">
            Try find something...
          </Typography>
          <CreateIcon sx={{fontSize:"5rem"}} />
        </Box>
      )}
    </Box>
  );
};

export default SearchInput;
