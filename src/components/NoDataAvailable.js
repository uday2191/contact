import React from 'react';

const noDataAvailable = props =>{
    return(
        <div className="contact-details  panel panel-primary">
        <div className="panel-body">
            <div className="row col-sm-6 col-md-6 col-lg-6 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                No Contacts Available.
            </div>
        </div>
        </div>
    )
}

export default noDataAvailable;
  
