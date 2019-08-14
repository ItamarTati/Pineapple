import React, {Component} from 'react'

export default class Button extends Component {
    render(){
       
        return (
            <div className="button">
            <a href="#about"><button className="learn-more">
                <div className="circle">
                <span className="icon arrow"></span>
                </div>
                <p className="button-text">Learn More</p>
            </button></a>
            </div>
        )          
}


}


