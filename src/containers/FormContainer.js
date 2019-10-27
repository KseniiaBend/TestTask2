import React from "react";
import { connect } from "react-redux";
import FormComponent from "../components/form/FormComponent";
import { addLists } from "../actions/lists";

const FormContainer = ({ addLists }) => <FormComponent addLists={addLists} />;

export default connect(
  null,
  dispatch => ({
    addLists: lists => {
      dispatch(addLists(lists));
    }
  })
)(FormContainer);
