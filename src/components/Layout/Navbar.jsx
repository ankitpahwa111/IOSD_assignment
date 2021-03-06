import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./signedInLinks";
import SignedOutLinks from "./signedOutLinks";
import { connect } from "react-redux";
const Navbar = (props) => {
  const { auth } = props;
  let Links = {};
  if (auth.uid) Links = <SignedInLinks />;
  else Links = <SignedOutLinks />;
  return (
    <nav className="nav-wrapper grey darken-1">
      <div className="container">
        <Link to="/" className="brand-logo">
          Repsuite.
        </Link>
        {Links}
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(Navbar);
