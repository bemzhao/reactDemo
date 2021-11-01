import React from "react";

class Item extends React.Component {
  render() {
    const { props } = this;
    return (
      <li onClick={this.handleClick}>
        <span>{props.data.name}</span>
        <img src={props.data.image} />
      </li>
    );
  }

  handleClick = () => {
    this.props.handleClick(this.props.index);
  };
}
export default Item;
