import React from 'react';

const Header = (props) => {
    
    
    return (
        <div className="header">
            <div className="coffee-week-title">
                <div>HBC Coffee Week</div>   
                <div id="date">Mon 12 - Fri 16 Nov</div>
            </div>
            <div className="logo">
                <img src="./coffee.svg" alt="coffee week logo"/>
            </div>
            <div className="account">
                <div className="profile-image"></div>
                <div className="profile-details">
                    Harry Quigley
                    <span id="role">Admin</span>
                </div>
            </div>
        </div>
        
    );
};

export default Header;