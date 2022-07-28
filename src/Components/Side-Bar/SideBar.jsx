//import useState hook to create menu collapse state
import React from "react";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";

//import icons from react icons
import Logo from "../../assets/th_red.png";

import "react-pro-sidebar/dist/css/styles.css";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={false}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <img className="logo" src={Logo} alt="logo" />
            </div>
            <p>Hello Christopher</p>
          </SidebarHeader>
          <SidebarContent>
            <Menu popperArrow={false}>
              <SubMenu
                className="titleText"
                title={"Sessions"}
                defaultOpen={true}
              >
                <MenuItem>Upcoming Appointments</MenuItem>
                <MenuItem>Past Appointments</MenuItem>
              </SubMenu>
              <SubMenu
                className="titleText"
                title={"Payments"}
                defaultOpen={true}
              >
                <MenuItem>Your Subscriptions</MenuItem>
                <MenuItem>Our Prices</MenuItem>
              </SubMenu>
              <SubMenu
                className="titleText"
                title={"Do you need help?"}
                defaultOpen={true}
              >
                <MenuItem>Support</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </SubMenu>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu>
              <MenuItem>
                <button className="sidebar-book-button">
                  Book an appointment
                </button>
              </MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default SideBar;
