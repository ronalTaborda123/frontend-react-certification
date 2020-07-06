import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { makeStyles } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActionArea";
import TextField from "@material-ui/core/TextField";
import ProductInfo from "../components/product-search/index";
// import { Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const SearchProduct = ({ keycloak }) => {
  const classes = useStyles();
  const [name, setName] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const nameInput = event.target.elements.name;
    setName(nameInput.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Card variant="outlined">
          <CardActions>
            <TextField
              aria-describedby="my-helper-text"
              name="name"
              type="search"
              label="Name"
              className={classes.root}
            ></TextField>
            {/* <label htmlFor="name">
              <Input id="name" placeholder="Name" />
            </label> */}

            <button
              onSubmit={handleSubmit}
              variant="contained"
              color="primary"
              className={classes.button}
              //   startIcon={<AddCircleOutlineIcon />}
            >
              Search Product
            </button>
          </CardActions>
        </Card>
      </form>
      <ProductInfo productName={name} keycloak={keycloak} />
    </div>
  );
};

export default SearchProduct;
