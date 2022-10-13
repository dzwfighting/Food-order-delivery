import React from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import Commonsection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import { useState, useEffect } from "react";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");

  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);

  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      <Commonsection title={title} />
      <section className="justify-width">
        <Row>
          <Col lg="2" md="2">
            <div className="product__images">
              <div
                className="img__item mb-3"
                onClick={() => setPreviewImg(product.image01)}
              >
                <img src={product.image01} alt="" className="w-50" />
              </div>
              <div
                className="img__item mb-3"
                onClick={() => setPreviewImg(product.image02)}
              >
                <img src={product.image02} alt="" className="w-50" />
              </div>
              <div
                className="img__item mb-3"
                onClick={() => setPreviewImg(product.image03)}
              >
                <img src={product.image03} alt="" className="w-50" />
              </div>
            </div>
          </Col>

          <Col lg="4" md="4">
            <div className="product__main-img">
              <img src={previewImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="single__product-content">
              <h2 className="product__title mb-3">{title}</h2>

              <p className="product__price">
                {" "}
                Price: <span>${price}</span>
              </p>

              <p className="category mb-5">
                Category: <span>{category}</span>
              </p>

              <button onClick={addItem} className=" addToCart__btn">
                Add to Cart
              </button>
            </div>
          </Col>

          <Col lg="12">
            <div className="tabs d-flex align-items-center gap-5 py-2">
              <h6
                className={`${tab === "desc" ? "tab__active" : ""}`}
                onClick={() => setTab("desc")}
              >
                Description
              </h6>
              <h6
                className={`${tab === "rev" ? "tab__active" : ""}`}
                onClick={() => setTab("rev")}
              >
                Review
              </h6>
            </div>

            {/* to achieve when click description, shows food details, else shows reviews */}
            {tab === "desc" ? (
              <div className="tab__content">
                <p>{desc}</p>
              </div>
            ) : (
              <div className="tab__form mb-3">
                <div className="review__text pt-5">
                  <p className="user__name mb-0">Jhon Wee</p>
                  <p className="user__email">John777@gamil.com</p>
                  <p className="feedback__text">great products</p>
                </div>

                <div className="review__text">
                  <p className="user__name mb-0">Jhon Wee</p>
                  <p className="user__email">John777@gamil.com</p>
                  <p className="feedback__text">great products</p>
                </div>

                <div className="review__text">
                  <p className="user__name mb-0">Jhon Wee</p>
                  <p className="user__email">John777@gamil.com</p>
                  <p className="feedback__text">great products</p>
                </div>

                <form className="form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Write your name"
                      onChange={(e) => setEnteredName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Write your Email"
                      onChange={(e) => setEnteredEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form__group">
                    <textarea
                      rows={5}
                      type="text"
                      placeholder="Write your Review"
                      onChange={(e) => setReviewMsg(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="addToCart__btn">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </Col>

          <Col lg="12" className="mb-5 mt-4">
            <h2 className="related__Product-title">You might also like</h2>
          </Col>

          {relatedProduct.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4 " key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
