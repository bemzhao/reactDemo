import React, { Component, Fragment } from 'react';

class Bar extends Component {
    render() {
        return (
            <Fragment>
                <input 
                    value={this.props.inputValue} 
                    onKeyUp={this.props.onKeyUp} 
                    onChange={this.props.onChange}
                />
                <button 
                    type="button" 
                    onKeyPress={this.props.addMenu} 
                    onClick={this.props.addMenu}
                >
                    提交
                </button>
            </Fragment>
        );
    }
}

export default Bar;