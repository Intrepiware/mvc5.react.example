import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shared from './Components/shared';
 
class ContactComponent extends Component {
    render() {
        return(
            <div>
                <h1>Good night from Contact Component!</h1>
                <Shared message="I have been placed here from the Home/Contact page"></Shared>
            </div>
        );
    }
}
 
ReactDOM.render(<ContactComponent />, document.getElementById("root"));