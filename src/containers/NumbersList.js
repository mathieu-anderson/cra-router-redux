import React from "react";
import { connect } from "react-redux";

class NumbersList extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Numbers List</h1>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            listStyleType: "none",
            fontSize: "4em"
          }}
        >
          {this.props.numbers.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(NumbersList);
