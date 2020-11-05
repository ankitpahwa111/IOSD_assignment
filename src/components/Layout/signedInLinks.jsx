import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/Actions/authActions";
import { connect } from "react-redux";
import { Avatar, Image } from "antd";

const SignedInLinks = (props) => {
  //console.log('here')
  const profile = props.profile;
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/create">New Post</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Sign Out</a>
        </li>
        <Avatar
          size = "50"
          src="https://avatars2.githubusercontent.com/u/32906809?s=460&u=4285e5bbc385e2177c342e1293f24492ec381746&v=4"
        />
      </ul>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
