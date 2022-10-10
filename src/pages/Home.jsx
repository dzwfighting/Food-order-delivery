import React from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";

const Home = () => {
  // set title = "Home", it will be connected in Helmet, and the page title add a sign: Food ordering app -Home
  return (
    <Helmet title="Home">
      {/* <section> 标签定义了文档的某个区域。比如章节、头部、底部或者文档的其他区域。 */}
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <h5 className="mb-3">Let make an order use easy way</h5>
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
                      Order Now <i class="ri-arrow-right-s-line"></i>
                    </button>

                    <button className="all__foods-btn">
                      <Link to="/foods">See All Foods</Link>
                    </button>
                  </div>

                  <div className=" hero__service d-flex align-items-center gap-5 mt-5">
                    <p className=" d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i class="ri-car-line"></i>
                      </span>{" "}
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
    </Helmet>
  );
};

export default Home;
