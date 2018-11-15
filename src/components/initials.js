import React from 'react';

const Initials = (props) => {
    var letters = props.firstName.charAt(0) + props.lastName.charAt(0);
    
    return (
        <div className={props.recipient === 'true' ? "initials-recipient" : "initials"}>
            {letters}
        </div>
        
    );
};

export default Initials;