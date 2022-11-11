import React, { Component } from 'react';


class Usecase extends Component {
    render() {
        return <div className={this.props.className}>
                <img src={this.props.images1} alt='crypo-img'></img>
                <div> <span>{this.props.text1}</span>               
                </div>
            </div>
    }
}
export default Usecase;