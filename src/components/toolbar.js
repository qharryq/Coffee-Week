import React from 'react';

const Toolbar = (props) => {
    
    
    return (
        <div className="toolbar">
            <button id="randomise-btn" onClick= {props.randomlyAssignCoffee}>
                <div className="btn-content">
                    <img src="./randomize.svg" alt="randomise participants"/>
                    <div id="btn-txt">
                        Randomize
                    </div>
                </div>
            </button>

            {props.assigned && <button id="notify-btn">
                <div className="btn-content">
                    <img src="./notify.svg" alt="notify participants"/>
                    <div id="btn-txt">
                        Notify Participants
                    </div>
                </div>
            </button>}

        </div>
        
    );
};

export default Toolbar;





