import React from "react";
import { connect } from "react-redux";

class Home extends React.Component {
  addOne() {
    const nextNumber = this.props.numbers.length + 1;
    this.props.dispatch({ type: "ADD_NUMBER", number: nextNumber });
  }

  // deleteNumber() {
  //   console.log();
  // }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1 className="title">Welcome</h1>
        <h3>Mapped state :</h3>
        <button onClick={this.addOne.bind(this)}>
          Add 1
        </button>
        <ul>
          {this.props.numbers.map((item, index) => {
            return (
              <li key={index} style={{ listStyleType: "none" }}>
                {item}
                {/* <button onClick={this.deleteNumber.bind(this)}>
                  x
                </button> */}
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

export default connect(mapStateToProps)(Home);
