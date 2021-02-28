import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { CLEAR_CART } from "../../store/actions/actions";
import Details from "./Details";

const SideBar = (props) => {
  return (
    <>
      <div className="notification is-dark my-3">
        <p className="mb-2 ">Have A Coupon ? </p>
        <input type="text" className="input" />
        <button className="button is-primary is-outlined is-fullwidth mt-3">
          Check Coupon
        </button>
      </div>
      <Details />
      <button className="button is-primary is-fullwidth mt-2 is-hidden-touch">
        Place Order
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuthenticated,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => {
      dispatch({ type: CLEAR_CART, payload: {} });
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SideBar));
