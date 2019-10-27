import React from "react";
import { connect } from "react-redux";
import ListsComponent from "../components/list/ListsComponent";

const ListsContainer = ({ lists }) => <ListsComponent lists={lists} />;

export default connect(state => ({
  lists: state.filter(list => list.enabled)
}))(ListsContainer);
