import React, { useEffect, useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Paper, Grow, Divider, Popper } from "@material-ui/core";

import VN from "../../../assets/img/Vietnam_Flag.png";
import EN from "../../../assets/img/England_Flag.png";
// core components
import { Button, MenuList, MenuItem } from "@material-ui/core";
import "./styles.css";

export default function ButtonLanguage(props) {
  const { onChangeLanguage } = props;
  const { dropdownHeader, caret } = props;

  const dropdownList = [
    {
      text: "Việt Nam",
      image: VN,
    },
    {
      text: "English",
      image: EN,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <div>
        <Button
          aria-label="Notifications"
          aria-owns={anchorEl ? "menu-list" : null}
          aria-haspopup="true"
          onClick={handleClick}
          style={{ fontSize: "14px", transform: "translateY(-20%)", width: "170px"}}
        >
          <img alt="" src={VN} style={{marginRight: "10px"}}></img>
          <div>Tiếng Việt</div>
          <b className="optionLanguage-caret" />
        </Button>
      </div>
      <Popper
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        transition
        disablePortal
        placement={"bottom-start"}
      >
        {() => (
          <Grow
            in={Boolean(anchorEl)}
            id="menu-list"
            style={{ transformOrigin: "0 0 0" }}
          >
            <Paper className="optionLanguage-dropdown">
              <ClickAwayListener onClickAway={handleCloseAway}>
                <MenuList role="menu" className="optionLanguage-menuList">
                  {dropdownList.map((prop, key) => {
                    return (
                      <MenuItem key={key}>
                        <img
                          src={prop.image}
                          style={{ marginRight: "10px" }}
                        ></img>
                        {prop.text}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
