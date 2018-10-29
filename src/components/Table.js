import React from 'react';
import { Link } from 'react-router-dom';
const Table = props =>{
  const { contacts } = props;
    return(
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Actions</th>
              
            </tr>
          </thead>
          <tbody>
            {
              contacts && contacts.map( (contact) => {
                return(
                  <tr key={contact.id}>
                    <th scope="row">
                      <Link to={'/contact/' + contact.id}>{contact.id} </Link></th>
                    <th scope="row">{contact.contactName}</th>
                    <th scope="row">{contact.code}</th>
                    <th scope="row">{contact.contactNumber}</th>
                    <th scope="row">
                      <button type="button" onClick={props.delete.bind(this, contact.id)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                      <button className="btn-actions" type="button" onClick={props.edit.bind(this, contact.id)}><i class="fa fa-edit" aria-hidden="true"></i></button></th>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
    )
}

export default Table;
  
