import React, { useState, useEffect } from "react";
import { findAllGames } from "../../utilities/apiRoutes/games-api";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Rating from "../Rating/Rating";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

// ... other imports

function Home() {
  const [games, setGames] = useState([]);
  const [expanded, setExpanded] = useState([]); // Separate state to track expansion of each card

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      const updatedExpanded = [...prevExpanded];
      updatedExpanded[index] = !updatedExpanded[index];
      return updatedExpanded;
    });
  };

  const fetchGames = async () => {
    try {
      const response = await findAllGames();
      setGames(response);
      setExpanded(new Array(response.length).fill(false)); // Initialize expanded array with false values for each card
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);

  const loading = () => {
    return <h1>No games to Display</h1>;
  };

  const loaded = () => {
    return (
      <div className="d-flex flex-wrap justify-content-around">
        {games.map((element, index) => (
          <Card key={index} sx={{ maxWidth: 345 }} className="cardsflex">
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>GS</Avatar>}
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={element.title}
            />
            <CardMedia
              component="img"
              src={`${element.img}.jpg`}
              alt={element.title}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {element.description}
              </Typography>
              <Typography paragraph>Price: {element.price}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Rating />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded[index]} // Use the expansion state for the current card
                onClick={() => handleExpandClick(index)} // Pass the index of the current card to handleExpandClick
                aria-expanded={expanded[index]} // Use the expansion state for the current card
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Publisher:</Typography>
                <Typography paragraph>{element.publisher}</Typography>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </div>
    );
  };

  return games.length === 0 ? loading() : loaded();
}

export default Home;
