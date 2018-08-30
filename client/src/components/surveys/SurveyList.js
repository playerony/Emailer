import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import SurveyCard from "./SurveyCard";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.reverse().map(survey => {
      return (
        <SurveyCard {...survey} />
      );
    });
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return {
    surveys
  };
}

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
