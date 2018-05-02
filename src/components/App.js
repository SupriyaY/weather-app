import React from 'react';
import ZipForm from './ZipForm';

class App extends React.Component {
    constructor(props) {
    super(props);

    this.state= {
        zipcode: ''
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    
}
    onFormSubmit(zipcode){
        this.setState({zipcode});
    }
    render() {
        return (
        <div className="app">
        <ZipForm onSubmit={this.onFormSubmit}/>
        </div>
        );
    }
}



export default App;