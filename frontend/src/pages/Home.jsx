import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { useState } from "react";
import { useEffect } from "react";
import axiosInstance from "../lib/axios";
// !START BUILDING
export default function Home() {
  // !STATE
  const [products, setProducts] = useState([]);
  // !HANDLERS
  const fetchProducts = async () => {
    try {
      const { data } = await axiosInstance("/api/products");
      setProducts(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  // !USE EFFECT
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <Fragment>
      <Row>
        {products?.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product  product={product} />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
}
