import { logout } from "../../utilities/users-service";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
function CustomTabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ setUser, user }) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function handleLogOut() {
    try {
      logout();
    } catch (error) {
      console.log(error);
    } finally {
      setUser(null);
      navigate("/");
    }
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label=" Logout" {...a11yProps(0)} />
          <Tab label="About Me " {...a11yProps(1)} />
          <Tab label="Contact" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h3> Hello, {user.name}</h3>
        <p>Email: {user.email}</p>

        <Button variant="contained" onClick={handleLogOut}>
          Logout
        </Button>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p>Hello, My name is Orlando Valadez</p>
        <p>
          I have over 2 years of coding experience and i love to code every day
          and i have experience in React.js, CSS, Javascript, Node.js
          PostreSQL,Python and many more Languages.
        </p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <h3>Orlando Valadez</h3>
        <a
          href="https://github.com/Orlandouchiha425?tab=repositories"
          target="_blank"
          color="black"
          className=".text-white .bg-white"
        >
          GitHub <GitHubIcon />
        </a>
        <p>Kokomo Indiana , 46901</p>
        <a href="mailto:valadez425@gmail.com">Valadez425@gmail.com</a>
      </CustomTabPanel>
    </Box>
  );
}
