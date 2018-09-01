import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import Payments from "./Payments";

class Header extends Component {
  state = {
    showModalForm: false,
    credits: 1
  };

  showModalForm = () => {
    this.setState({
      ...this.state,
      showModalForm: true
    });
  };

  closeModalForm = () => {
    this.setState({
      ...this.state,
      showModalForm: false
    });
  };

  renderContent() {
    const { auth } = this.props;

    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return [
          <li key="1">
            <a onClick={this.showModalForm}>Add credits</a>
          </li>,
          <li key="2" style={{ margin: "0 10px" }}>
            <a>Credits: {this.props.auth.credits}</a>
          </li>,
          <li key="3">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  onChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  renderModal() {
    return (
      <Modal
        open={this.state.showModalForm}
        onClose={this.closeModalForm}
        center
      >
        <label>How many credits do you want to buy?</label>
        <input
          type="number"
          name="credits"
          value={this.state.credits}
          onChange={this.onChange}
          min="1"
          max="100"
        />

        <Payments credits={this.state.credits} />
      </Modal>
    );
  }

  render() {
    return (
      <nav className="nav-wrapper teal lighten-2">
        <div className="container">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            Emailer
          </Link>
          <ul className="right">{this.renderContent()}</ul>

          {this.renderModal()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Header);
