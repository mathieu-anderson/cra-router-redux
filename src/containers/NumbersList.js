import React from "react";
import { connect } from "react-redux";
import RenderItems from "../components/RenderItems";

class NumbersList extends React.Component {
  render() {
    const { numbers } = this.props;

    return (
      <div>
        <h1 className="title">Numbers List</h1>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyleType: "none",
            fontSize: "4em"
          }}
        >
          <RenderItems items={numbers} />
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(NumbersList);
