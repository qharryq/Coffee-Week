import React from 'react';
import GiverReceiverPairing from './giver_receiver_pairing';

const GiverReceiverPairingList = (props) => {
    console.log(props.participants)
    console.log("HERE");
    console.log(props.assigned);
    const participantItems = props.participants.map((participant) => {
        return ( 
        <GiverReceiverPairing 
            key={participant.guid}
            participant={participant}
            assigned={props.assigned}/>
        );
    });

    console.log(props.assigned);

    return (
        <div className={props.assigned === false ? 'participant-list' : 'participant-list-after-assignment'}>
            {participantItems}
        </div>
    );
};

export default GiverReceiverPairingList;

