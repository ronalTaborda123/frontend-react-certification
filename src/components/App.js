import React, { useState } from "react";
import { useEffect } from "react";
// import Products from "../components/Products";
import Cards from "./Cards";
import _ from "lodash";

function fetchListProduc() {
  const url = "http://localhost:8080/apli/v1/products";

  return window
    .fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log({ response });
      return response;
    });
}

const KeycloakProvider = () => {
  const [products, setProductData] = useState([]);
  useEffect(() => {
    fetchListProduc().then((productoData) => {
      console.log({ productoData });
      setProductData(productoData);
      console.info("Authenticated");
    });
  }, []);
  return !_.isEmpty(products) ? <Cards imgeProduct={products}></Cards> : <></>;
};

export default KeycloakProvider;
