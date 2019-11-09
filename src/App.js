import React from 'react';
import Menu from './Menu';

class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	inputValue: '',
    	list: ["111", "222"]
    };

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.addMenu = this.addMenu.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.inputChange} ref={(input) => {this.input = input}} name="" />
        <button type="button" onClick={this.addMenu}>提交</button>
        <ul>
        	{
        		this.state.list.map((item, index) => {
        			return (
        					<Menu key={index} content={item} index={index} deleteItem={this.deleteItem}/>
        			)
	        	})
        	}
        </ul>
      </div>
    );
  }

  addMenu () {
  	// this.setState({
  	// 	list: [...this.state.list, this.state.inputValue]
  	// });
  	if (this.state.inputValue === '') {
  		alert("不能为空");
  		return false;
  	}

  	this.setState((state) => {
  		return {
  			inputValue: '',
  			list: state.list.concat(this.state.inputValue)
  		};
  	});

	}

	inputChange (e) {
  	this.setState({
  		inputValue: this.input.value
  	});
	}

	deleteItem (index) {
		// this.setState({
		// 	state.list.splice(index,1);
		// })
		let list = this.state.list;
		list.splice(index, 1);
		this.setState({
			list: list
		})
	}
}

export default App;
