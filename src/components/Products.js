import React from "react";
// import Cards from "./Cards";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const Products = ({ rows }) => {
  const classes = useStyles();

  return (
    <div>
      <Link to="/ProductsNew" className={classes.link}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddCircleOutlineIcon />}
        >
          {" "}
          New Product
        </Button>
      </Link>

      {/* <Cards></Cards>{" "} */}
    </div>
  );
};
export default Products;
