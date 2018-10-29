import React, { Component } from 'react';
import './../App.css';
import TextInput from './FormComponents/TextInput';
import Button from './FormComponents/Button';
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();

// import { history } from 'react-router';

export default class EditContactForm extends Component {
  constructor(props){
    super(props);
    this.contactNumber = React.createRef();
    this.state = {
        initialCall: true
    }
  }

  create = () => {
    const { contactName, contactNumber, code } = this.state;
    this.props.update({
        contactName, contactNumber, code
    });
  }

  handleChange = (event, key) => { 
      this.setState({
        [key]: event.target ? event.target.value : ''
      })
  }

  componentWillMount() {
    const { contactName, contactNumber, code } = this.props;
        this.setState({
            contactName, contactNumber, code, initialCall: false
        })
  }

  componentWillReceiveProps(props) {
    const { contactName, contactNumber, code } = props;
      this.setState({
        contactName, contactNumber, code
      })
  }

  render() {
    const { contactName, contactNumber, code } = this.state;
    return (<div className="row col-sm-offset-2 col-md-offset-2 col-lg-offset-2 col-sm-6 col-lg-6 col-md-6 ">  
                <TextInput 
                    name="contactName"
                    label="Contact Name" 
                    handleChange={this.handleChange}
                    value={contactName}
                />

                 <TextInput 
                    name="code"
                    label="Code"
                    handleChange={this.handleChange}  
                    value={code}
                />

                <TextInput 
                    name="contactNumber"
                    label="Contact Number"
                    handleChange={this.handleChange}  
                    value={contactNumber}
                />
                <Button label="Update Contact" 
                  type="submit"
                  handleClick={this.create}
                />
            </div>
    );
  }
}
