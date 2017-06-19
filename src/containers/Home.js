import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Welcome</h1>
        <h3>Mapped state :</h3>
        <ul>
          {this.props.test.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}
        </ul>
        <button>
          Add 1
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Home);
