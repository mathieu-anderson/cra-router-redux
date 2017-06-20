import React from "react";

class RenderItems extends React.Component {
  constructor(props) {
    super(props);
    this.mapItems = this.mapItems.bind(this);
  }

  mapItems(item, index) {
    return (
      <li key={index} style={{ listStyleType: "none" }}>
        {item}
      </li>
    );
  }

  render() {
    return (
      <div>
        {this.props.items.map(this.mapItems)}
      </div>
    );
  }
}

export default RenderItems;
