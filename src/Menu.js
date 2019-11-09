import React from 'react'

class Menu extends React.Component {
	render () {
		return (
			<li onClick={this.handleClick}>{this.props.content}</li>
		)
	}

	handleClick = () => {
		this.props.deleteItem(this.props.index)
	}
}

export default Menu;