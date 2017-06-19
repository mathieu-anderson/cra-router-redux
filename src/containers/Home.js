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
      <div>
        <h1 className="title">Welcome</h1>
        <h3>Mapped state :</h3>
        <ul>
          {this.props.numbers.map((item, index) => {
            return (
              <li key={index}>
                {item}
                {/* <button onClick={this.deleteNumber.bind(this)}>
                  x
                </button> */}
              </li>
            );
          })}
        </ul>
        <button onClick={this.addOne.bind(this)}>
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
