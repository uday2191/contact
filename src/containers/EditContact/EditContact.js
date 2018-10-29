import React, { Component } from 'react';
import { connect } from 'react-redux';

import EditContactForm from './../../components/EditContactForm';
import { getContact, updateContact } from './../../actions/contactActions';

class CreateContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            created: false
        };
    }
    componentWillMount() {
        this.props.getContact(this.props.match.params.id);
    }

    componentWillReceiveProps(props) {
        this.props = props;
    }

    update = (body) => {
        body.id = this.props.match.params.id;
        this.props.updateContact(body);
        this.props.history.push('/list');
    }
    render() {
        const { contactName, contactNumber, code } = this.props.contactReducer.currentContact;

        return (
            <div className="contact-details  panel panel-primary">
                <div className="panel-heading">Create Contact</div>
                <div className="panel-body">
                    <div className="row col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                        
                <EditContactForm 
                    update={this.update}
                    contactName={contactName}
                    contactNumber={contactNumber}
                    code={code}
                    />
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
    getContact: id => dispatch(getContact(id)),
    updateContact: body => dispatch(updateContact(body))
})
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateContact);
  