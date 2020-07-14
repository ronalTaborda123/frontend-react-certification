import React, { useState, useEffect } from "react";
import _ from "lodash";
// import axios from "axios";

function fetchProduct(productName, keycloak) {
  const tokens = JSON.parse(localStorage.getItem("tokens"));
  const url = "http://localhost:8080/apli/v1/products/" + productName;
  // const token = tokens.token;
  console.log(tokens.token);
  const bearer = `Bearer ${tokens.token}`;
  return (
    // axios
    //   .get("http://localhost:8080/apli/v1/products", {
    //     headers: {
    //       Accept: "application/json",
    //       Authorization: bearer,
    //       "Content-type": "application/json;charset=UTF-8",
    //     }, Authorization: bearer,
    //   })
    window
      .fetch(url, {
        method: "GET",
        mode: "cors",
        headers: {
          Authorization: bearer,
        },
      })
      .then((response) => response.json())
      .then((response) => {
        console.log({ response });
        return response.data;
      })
      .catch(() =>
        console.log(
          "Can’t access " +
            "http://localhost:8080/apli/v1/products/1" +
            " response. Blocked by browser?"
        )
      )
  );
}

const ProductInfo = ({ productName, keycloak }) => {
  const [products, setProductData] = useState(null);
  useEffect(() => {
    if (!productName) {
      return;
    }
    fetchProduct(productName, keycloak).then((productoData) => {
      console.log({ productName });
      setProductData(productoData);
    });
  }, [productName, keycloak]);

  return !_.isEmpty(products) ? (
    console.log(products)
  ) : (
    // <ProductItem rows={products}></ProductItem>
    <></>
  );
};

export default ProductInfo;
