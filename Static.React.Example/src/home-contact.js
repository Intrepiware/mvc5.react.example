import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shared from './Components/shared';
 
class ContactComponent extends Component {

    getHourText() {
        const hour = new Date().getHours();
        if(hour < 12)
            return "Good morning";
        if(hour < 17)
            return "Good afternoon";
        if(hour < 21)
            return "Good evening";
        else
            return "Good night";
    }
    render() {
        return(
            <div>
                <h1>{this.getHourText()} from Contact Component!</h1>
                <Shared message="I have been placed here from the Home/Contact page"></Shared>
            </div>
        );
    }
}
 
ReactDOM.render(<ContactComponent />, document.getElementById("root"));