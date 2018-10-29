import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteContact } from './../../actions/contactActions';
import NoDataAvailable from './../../components/NoDataAvailable'
import Table from './../../components/Table';
class ContactList extends Component {
    constructor(props) {
        super(props);
    }
    delete = (id) => {
        this.props.deleteContact(id);
    }
    edit(id) {
        this.props.history.push('/edit/' + id);
    }
    render() {
        const { contacts } = this.props.contactReducer;
        return (
            <div className="contact-details  panel panel-primary">
                <div className="panel-heading">Contact List</div>
                <div className="panel-body">
                    <div className="row col-sm-10 col-md-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
                       {
                           contacts && contacts.length > 0 
                            ? 
                                <Table contacts={contacts} 
                                    delete={this.delete}
                                    edit={this.edit.bind(this)}/>
                            :
                                <NoDataAvailable />
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
    deleteContact: id => dispatch(deleteContact(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps    
)(ContactList);
  