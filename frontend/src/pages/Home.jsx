import React, { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Product from "../components/Product";
import { useState } from "react";
import { useEffect } from "react";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
// !START BUILDING
export default function Home() {
  const { data: products, error, isLoading } = useGetProductsQuery();
  // !HANDLERS
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Row>
          {products?.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Fragment>
  );
}
