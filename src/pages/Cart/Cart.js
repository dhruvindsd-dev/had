import React from "react";
import MainCart from "./MainCart";
import SideBar from "./SideBar";

const Cart = () => {
  return (
    <>
      <div className="columns is-centered">
        <div className="column is-6">
          <MainCart />
        </div>
        <div className="column is-3">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default Cart;
