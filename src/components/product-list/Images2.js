import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  {
    idimages: "1",
    url:
      "https://cnet3.cbsistatic.com/img/nMoE20f4PXRsjkiuTZIL9dbM6sI=/940x0/2019/07/03/c83d8791-3cfe-4b2b-b6d8-219646c5333d/mazda-cx-5-2019-foto.jpg",
  },
  {
    idimages: "2",
    url: "https://static.iris.net.co/soho/upload/images/2017/4/11/47657_1.jpg",
  },
  {
    idimages: "3",
    url:
      "https://www.comparaonline.com.co/blog-statics/co/uploads/2020/03/BMW-estuvo-entre-las-cinco-marcas-que-m%C3%A1s-carros-de-lujo-vendi%C3%B3-en-2019.jpg",
  },
];
const importImages = () => {
  return (
    <Carousel>
      {images.map((row) => (
        <Carousel.Item key={row.idimages}>
          <img className="d-block w-100" src={row.url} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default importImages;
