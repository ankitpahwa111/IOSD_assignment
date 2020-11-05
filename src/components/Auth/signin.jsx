import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/Actions/authActions";
import { Redirect } from "react-router-dom";
import logo from "./Image.png";
import SocialFollow from "./Social";
// import Image from 'react-bootstrap/Image'
class Signin extends Component {
  state = {
    email: "",
    password: "",
  };
  handleOnChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/"></Redirect>;
    }

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <form onSubmit={this.handleOnSubmit} className="col s5">
              <h1 className="bold">Hey There 👋</h1>
              <h1 className="flow-text"> Welcome back to Repsuite.</h1>
              {/* <h5 className="dark-grey text-darken-3">Sign In</h5> */}
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={this.handleOnChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="input-field center">
                <button className="btn pink darken-1">Login</button>
              </div>
              <div className="center red-text">{authError}</div>
              <SocialFollow />
            </form>
            <div className="col s1"></div>
            <img src={logo} className="col s6" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)),
  };
};
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
