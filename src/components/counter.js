import React from 'react';

const Counter = (props) => {
    
    var overallCount = props.dubNumber.length + props.nyNumber.length;
    
    return (
        <div className="counter">
            <p><b>Participants</b><span id="grey"> - showing <b>1 to {overallCount}</b> </span></p>
        </div>
        
    );
};

export default Counter;