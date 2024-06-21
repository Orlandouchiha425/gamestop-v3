const express = require("express");
const app = express();
const logger = require("morgan");
const path = require("path");
const favicon = require("serve-favicon");
const schedule = require("node-schedule");
const gamesRouter = require("./routes/api/games");
const cartRouter = require("./routes/api/order");
const wishListRouter = require("./routes/api/wishList");
require("dotenv").config();
require("./config/database");

app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));
app.use(require("./config/checkToken"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/games", gamesRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Gamestop connected to port ${port}`);
});

// Function to ping a website
const pingWebsite = async (url) => {
  try {
    const fetch = (await import("node-fetch")).default;
    const response = await fetch(url);
    if (response.ok) {
      console.log(`Successfully pinged ${url}`);
    } else {
      console.error(`Failed to ping ${url}: ${response.statusText}`);
    }
  } catch (error) {
    console.error(`Error pinging ${url}: ${error.message}`);
  }
};

// URL of the website you want to keep awake
const WEBSITE_URL = "https://gamestopbyorlandovaladez.onrender.com/"; // Replace with your actual URL

// Function to check if current time is within the desired window (2 PM - 7 PM EST)
const isWithinTimeWindow = () => {
  const now = new Date();
  const startHour = 14; // 2 PM EST
  const endHour = 19; // 7 PM EST
  const currentHourEST = now.getUTCHours() - 4; // Convert UTC to EST (UTC-4)
  return currentHourEST >= startHour && currentHourEST < endHour;
};

// Schedule job to run every hour
schedule.scheduleJob("0 * * * *", () => {
  if (isWithinTimeWindow()) {
    pingWebsite(WEBSITE_URL);
  }
});
