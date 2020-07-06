import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Sliders2 from "./Sliders2";
import CardHeader from "@material-ui/core/CardHeader";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImgMediaCard = ({ imgeProduct }) => {
  const { name, description } = imgeProduct;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader title={name} />
        <CardMedia image="/static/images/cards/contemplative-reptile.jpg">
          <Sliders2 />
        </CardMedia>

        <br />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

ImgMediaCard.prototype = {
  imgeProduct: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
export default ImgMediaCard;
