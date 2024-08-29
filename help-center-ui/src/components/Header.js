import React from 'react';
import'./Header.css';

const Header = () =>{
    return(
        <header className="header">
            <div className="header-content">
                <h1>Abstract <span id='help'>| Help Center</span></h1>
                <button className="submit-request">Submit a request</button>
            </div>
        </header>
    );
};

export default Header;