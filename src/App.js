import React, {Component} from 'react';
import axios from 'axios';
import Item from './item';
import Bar from './bar';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			lists: ["111", "222"]
		};
	}

	componentDidMount() {
		axios.post('http://rap2api.taobao.org/app/mock/236179/person').then((res) => {
			this.setState({
				lists: res.data.lists
			})
		}).catch((error => {
			console.log(error)
		}))
	}

	render() {
		return (
			<div>
			  <Bar 
			    inputValue={this.state.inputValue} 
			    onChange={this.inputChange} 
			    onKeyUp={this.keycode} 
			    addMenu={this.addMenu}
			  />
			  <ul>
			    {
			      this.state.lists.map((item, index) => {
			        return (
			          <Item 
						key={index} 
						content={item.name} 
						index={index} 
						handleClick={this.handleDelete.bind(this, index)}
					  />
			        )
			      })
			    }
			  </ul>
			</div>
		)
	}

	keycode = (e) => {
		if (e.keyCode === 13) {
			this.addMenu()
		}
	}

	inputChange = (e) => {
		this.setState({
			inputValue: e.target.value
		})
	}
	addMenu = () => {
		if (this.state.inputValue.trim() === '') {
			alert("不能为空");
			return false;
		}
		let lists = this.state.lists;
		lists.push({name: this.state.inputValue});
		this.setState({
			inputValue: "",
			lists: lists
		})
	}
	handleDelete = (index) => {
		let lists = this.state.lists;
		lists.splice(index, 1);
		this.setState({
			lists: lists
		})
	}
}

export default App;
