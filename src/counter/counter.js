
import React, { Component } from 'react';

import './counter.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };
    
    decrement() {
        if (this.state.count <= 1) {
            return (
                this.setState({
                    count: 1
                })
            )
        } else{
            this.setState({
                count: this.state.count - 1
            });
        }
    };

    render() {
        return (
        <div className="counter">
            <button className='dec' onClick={(e) => this.decrement(e)}>-&nbsp;&nbsp;</button>
            <p className="count-dig" id="count"> {this.state.count} </p>
            <button className='inc' onClick={(e) => this.increment(e)}>&nbsp;&nbsp;+</button>
        </div>
        );
    }
};

export default Counter;