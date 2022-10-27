import React from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import { useEffect, useState } from "react";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Just sit back at home we will deliver it to you.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Just sit back at home we will deliver it to you.",
  },

  {
    title: "Easy Pick up",
    imgUrl: featureImg03,
    desc: "Just sit back at home we will deliver it to you.",
  },
];

const Home = () => {
  // why use useState?
  // to achieve when we click "Burger", the popular foods shows "Burger" foods
  // So, we we use useState, at first, the page shows All foods, when click different category food, the page shows the correspond foods
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  // =========================================
  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  // -----------------------------------------

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "BURGER") {
      const filteredProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "PIZZA") {
      const filteredProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "BREAD") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  // ======================================

  // set title = "Home", it will be connected in Helmet, and the page title add a sign: Food ordering app -Home
  return (
    <Helmet title="Home">
      {/* <section> 标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。 */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                {/* <h5 className="mb-3">Let make an order use easy way</h5> */}
                <div>
                  <br />
                  <br />
                  <br />
                </div>
                <h1 className="mb-4 hero__title">
                  <span>HUNGREY?</span>
                  <br /> just wait food{" "}
                  <span>
                    <br /> at your door
                  </span>
                </h1>

                <p>
                  <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                    <button className="order__btn d-flex align-items-center justify-content-between">
                      <Link to="/foods">
                        Order Now <i class="ri-arrow-right-s-line"></i>
                      </Link>
                    </button>

                    {/* <button className="all__foods-btn">
                      <Link to="/foods">See All Foods</Link>
                    </button> */}
                  </div>

                  <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                    <p className=" d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i class="ri-car-line"></i>
                      </span>
                      No shipping charge
                    </p>
                  </div>

                  <p className=" d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% secure guarantee
                  </p>
                </p>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category></Category>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle">What we serve</h5>
              <h2>Just sit back at home</h2>
              <h2>we will deliver it to you</h2>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} classNamemt-5>
                <div className="feature__item text-center px-5">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Popular food: burger, pizza... */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Popular Foods</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                {/* Bind onClick event to achieve show different page */}
                <button
                  className={`${category === "ALL" ? "foodBtnActive" : ""} `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item}></ProductCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why__tasty-treat mb4">
                <h2 className="tasty__treat-title">We Guarant The Tasty: </h2>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Fresh and tasty foods
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Quality Support
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose__us-title d-flex align-items-center gap-2">
                      <i class="ri-checkbox-circle-line"></i>
                      Order from any location
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2>Hot Pizza</h2>
            </Col>

            {/* ----------------- */}
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item}></ProductCard>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial mb-5">
                <h5 className="testimonial__subtitle">Testimonial</h5>
                <h2 className="testimonial__title">
                  What our <span>customers</span> are saying
                </h2>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
