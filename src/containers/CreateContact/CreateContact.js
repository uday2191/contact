import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateContactForm from './../../components/CreateContactForm';
import { createContact } from './../../actions/contactActions';

class CreateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            created: false
        };
    }
    create = (body) => {
        this.props.createContact(body);
        this.setState({
            created: true
        });
        setTimeout( () => {
            this.setState({
                created: false
            })
        }, 2000);
        this.props.history.push('/list');

    }
    render() {
        return (
            <div className="contact-details  panel panel-primary">
                <div className="panel-heading">Create Contact</div>
                <div className="panel-body">
                    <div className="row col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                        
                        <CreateContactForm create={this.create.bind(this)}/>
                        {
                            this.state.created ?
                                <p> Contact is creacted successfuly</p>
                                :
                                ''
                        }
                </div>
                </div>
                </div>          
            
        );
    }
}

const mapStateToProps = state => ({
    contactReducer: state.contactReducer
  });
  
const mapDispatchToProps = dispatch => ({
    createContact: body => dispatch(createContact(body))
})
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateContact);
  