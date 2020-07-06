import React, { useState, useEffect } from "react";
import _ from "lodash";

function fetchProduct(productName, keycloak) {
  console.log(keycloak.idToken);
  return window
    .fetch("http://localhost:8080/apli/v1/products/" + productName, {
      method: "GET",
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + keycloak.idToken,
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
