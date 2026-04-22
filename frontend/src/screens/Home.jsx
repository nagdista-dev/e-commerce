import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import products from "../assets/products";
import Product from "../components/Product";
import Rating from "../components/Rating";

export default function Home() {
  return (
    <Fragment>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product key={product._id} product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
