import React from "react";

import "../../../styles/product-card.css";

import { Link } from "react-router-dom";

const ProductCard = (props) => {
  // correspond to product.js 89 line
  // it like create the params for each product
  const { id, title, image01, price } = props.item;
  return (
    <div className="product__item">
      <div className="product__img">
        {/* let your data dynamic, is related with client click */}
        <img src={image01} alt="product-img" className="w-50" />
      </div>

      <div className="product__content">
        <h5>
          {/* jump to this food's id, related to client choose */}
          <Link to={`/foods/${id}`}>{title}</Link>
        </h5>
        <div className=" d-flex align-items-center justify-content-between">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
