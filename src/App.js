import React from 'react';

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
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.inputChange} name="" />
        <button type="button" onClick={this.addMenu}>提交</button>
        <ul>
        	{
        		this.state.list.map((item, index) => {
        			return <li key={index}>{item}</li>
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

  	this.setState((state) => {
  		return {list: state.list.concat(this.state.inputValue)};
  	});

	}

	inputChange (e) {
  	this.setState({
  		inputValue: e.target.value
  	});
	}
}

export default App;
