import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "@/redux/hooks/redux-hook";
import { Box } from "@mui/material";
import { IDevice } from "@/interfaces/IDevices";
import { headerMenuStyles } from "./muiStyles";
import { dropDownStyles } from "./muiStyles";
import { brandNameStyle } from "./muiStyles";
import { handleOpenHover } from "./handlers/handleOpenHover";
import { handleMenuClose } from "./handlers/handleMenuClose";
import { headerMenu } from "./contanst/menu";
import { uid } from "uid";
import Link from "next/link";

import HoverPopover from "material-ui-popup-state/HoverPopover";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";
const Categories = ({
  anchorEl,
  setAnchorEl,
  selectedCategories,
  setSelectedCategories,
}: any) => {
  const allDevices = useAppSelector((devices) => devices.devices.devices);

  const popupState = usePopupState({
    variant: "popover",
    popupId: "demoPopover",
  });

  const headerMenuEl = headerMenu.map((menu) => {
    return (
      <Box key={menu.id}>
        <Link prefetch={false} href={`/${menu.category.toLowerCase()}`}>
          <Typography
            {...bindHover(popupState)}
            variant="h6"
            noWrap
            component="div"
            sx={headerMenuStyles}
            onMouseEnter={(event) =>
              handleOpenHover(
                event,
                menu.categoryId,
                setSelectedCategories,
                setAnchorEl
              )
            }
          >
            {menu.category}
          </Typography>
        </Link>
      </Box>
    );
  });

  const filteredCategories = allDevices?.filter(
    (device) => device.category === selectedCategories
  );

  const filteredCategoriesEl = filteredCategories?.map((el: IDevice) => (
    <Link
      href={`/${selectedCategories?.toLocaleLowerCase()}/${el.id}`}
      key={uid()}
    >
      <Typography sx={dropDownStyles}>{el.name}</Typography>
    </Link>
  ));

  const open = Boolean(anchorEl);
  return (
    <>
      <Link
        href={"/"}
        onMouseEnter={() => handleMenuClose(setSelectedCategories, setAnchorEl)}
      >
        <Typography variant="h4" noWrap component="div" sx={brandNameStyle}>
          APPLE STORE
        </Typography>
      </Link>
      {headerMenuEl}
      <HoverPopover
        disableScrollLock={true}
        onMouseLeave={() => handleMenuClose(setSelectedCategories, setAnchorEl)}
        anchorEl={anchorEl}
        open={open}
        sx={{ marginTop: "10px" }}
        id={open ? "simple-popover" : undefined}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {filteredCategoriesEl}
      </HoverPopover>
    </>
  );
};

export default Categories;
