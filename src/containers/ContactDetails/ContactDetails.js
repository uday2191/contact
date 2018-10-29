import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getContact } from './../../actions/contactActions';

class ContactDetails extends Component {
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

    render() {
        const { contactName, contactNumber, code } = this.props.contactReducer.currentContact;

        return (
            <div className="contact-details  panel panel-primary">
                <div className="panel-heading">Contact Details</div>
                <div className="panel-body">
                    <div className="row col-sm-6 col-md-6 col-lg-6 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                        <dl class="dl-horizontal">
                        <dt>Name</dt>
                        <dd>{contactName}</dd>
                        <dt>code</dt>
                        <dd>{code}</dd>
                        <dt>Contact Number
                        </dt>
                        <dd>{contactNumber}</dd>
                        </dl>
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
    getContact: id => dispatch(getContact(id))
})
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ContactDetails);
  