import React from 'react';

class Item extends React.Component{
	render () {
		return (
			<li onClick={this.handleClick}>{this.props.content}</li>
		)
	}

	handleClick = () => {
		this.props.handleClick(this.props.index)
	}
}
export default Item;