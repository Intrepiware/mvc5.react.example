import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shared from './Components/shared';
 
class IndexComponent extends Component {
    render() {
        return(
            <div>
                <h1>Hello from Home-Index!</h1>
                <Shared message="I have been placed here from the Home/Index page"></Shared>
            </div>
        );
    }
}
 
ReactDOM.render(<IndexComponent />, document.getElementById("root"));