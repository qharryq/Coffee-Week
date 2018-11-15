import React from 'react';
import Initials from './initials';
import { LocationOn, KeyboardArrowRight } from '@material-ui/icons';


const GiverReceiverPairing = (props) => {

    if (props.assigned === false) {
        return (
                <div className="participant">
                    <div className="card-left">
                        <Initials recipient='false' firstName={props.participant.name.first} lastName={props.participant.name.last}/>
                        <div className="name-before-assignment">
                            <span id = "bold-name">{props.participant.name.first} {props.participant.name.last}</span>
                            <span id = "email">{props.participant.email}</span>
                        </div>
                    </div>
                    <div className="card-right">
                        <div className="location">
                            <div id="pin"><LocationOn/></div>
                            {props.participant.location.toUpperCase()}
                        </div>
                        <div className="arrow">
                            <KeyboardArrowRight/>
                        </div>
                    </div>

                </div>
        );
    }
    else {
        return (
            <div className="participant-after-assignment">
                <div className="card-top">
                    <Initials recipient = 'false' firstName={props.participant.name.first} lastName={props.participant.name.last}/>
                    <Initials recipient = 'true' firstName={props.participant.givingTo.name.first} lastName={props.participant.givingTo.name.last}/>
                </div>
                <div className="card-middle">
                    <div className="giver">
                        <span id="email">Giver</span>
                        <span id = "bold-name">{props.participant.name.first} {props.participant.name.last}</span>
                    </div>
                    <div className="right-arrow">
                        <img src="./arrow right.svg"/>
                    </div>
                    <div className="receiver">
                        <span id="email">Receiver</span>
                        <span id = "bold-name">{props.participant.givingTo.name.first} {props.participant.givingTo.name.last}</span>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className="location-after-assignment">
                        <div id="pin"><LocationOn/></div>
                        {props.participant.location.toUpperCase()}
                    </div>
                </div>
            </div>
    ); 
    }
};

export default GiverReceiverPairing;
