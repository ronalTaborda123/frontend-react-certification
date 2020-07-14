import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { KeycloakProvider } from "@react-keycloak/web";
import keycloak, { config as keyCloakProps } from "./keycloak";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import Orders from "./components/Orders.js";
import Products from "./components/Products.js";
import Images2 from "./components/product-list/Images2";
import ProductsNew from "./components/ProductsNew.js";
import OrdersNew from "./components/OrdersNew.js";
import Cards from "./components/Cards";
import "./App.css";
import SearchProduct from "./components/Search";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: "inherit",
  },
  link: { textDecoration: "none", color: theme.palette.text.primary },
}));
function App() {
  const classes = useStyles();
  return (
    <KeycloakProvider keycloak={keycloak} {...keyCloakProps}>
      <Router>
        <div style={{ display: "flex" }}>
          <Drawer
            style={{ width: "240px" }}
            variant="persistent"
            anchor="left"
            open={true}
            classes={{ paper: classes.drawerPaper }}
          >
            <List>
              <Link to="/" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Home"} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/Orders" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <FormatListNumberedRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Orders"} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/Products" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Products"} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/Images2" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Images2"} />
                </ListItem>
              </Link>
            </List>
            <List>
              <Link to="/Cards" className={classes.link}>
                <ListItem button>
                  <ListItemIcon>
                    <AddCircleOutlineRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Cards"} />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/">
              <Container>Home</Container>
            </Route>
            <Route exact path="/Orders">
              <Container>
                <Typography variant="h2">Orders</Typography>

                <Orders></Orders>
              </Container>
            </Route>
            <Route exact path="/Products">
              <Container>
                <Typography variant="h2">Products</Typography>

                <Products></Products>
              </Container>
            </Route>
            <Route exact path="/Images2">
              <Container>
                <Typography variant="h2">Images2</Typography>

                <Images2></Images2>
              </Container>
            </Route>
            <Route exact path="/ProductsNew">
              <Container>
                <Typography variant="h2">ProductsNew</Typography>
                <ProductsNew></ProductsNew>
              </Container>
            </Route>
            <Route exact path="/OrdersNew">
              <Container>
                <Typography variant="h2">OrdersNew</Typography>
                <OrdersNew></OrdersNew>
              </Container>
            </Route>
            <Route exact path="/Cards">
              <Container>
                <Typography variant="h2">Cards</Typography>
                <Cards></Cards>
              </Container>
            </Route>
            <Route exact path="/SearchProduct">
              <Container>
                <Typography variant="h2">SearchProduct</Typography>

                <SearchProduct keycloak={keycloak}></SearchProduct>
              </Container>
            </Route>
          </Switch>
        </div>
      </Router>
    </KeycloakProvider>
  );
}

export default App;
