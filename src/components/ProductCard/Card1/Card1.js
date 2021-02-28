import React from "react";
import { withRouter } from "react-router";
import { getPriceFromDiscount } from "../../../shared";
import Rating from "../../../components/Rating/Rating";
const Card1 = (props) => {
  return (
    <div
      onClick={() => {
        props.history.push(`/product/${props.smallCardObj.id}`);
      }}
      className="notification hover-pointer is-dark"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <figure className="image is-128x128">
          <img src={props.smallCardObj.img} alt="" />
        </figure>
      </div>
      <div className="content has-text-light mt-3">
        <p className="is-size-4 mb-1 hover-pointer">
          {props.smallCardObj.title}
        </p>
        <Rating num={props.smallCardObj.rating} />
        <span className="is-size-5">
          <sup>₹</sup>
          {getPriceFromDiscount(
            props.smallCardObj.price,
            props.smallCardObj.discount
          )}
        </span>
        <span
          className="is-size-7 ml-4"
          style={{ textDecoration: "line-through" }}
        >
          ₹{props.smallCardObj.price}
        </span>
        <br />
      </div>
      {props.children}
    </div>
  );
};

export default withRouter(Card1);
