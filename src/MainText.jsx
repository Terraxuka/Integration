import React from 'react';

function MainText({ shake, onClick, text }) {
    
    return (
        <div className={`MainText ${shake ? 'shake' : ''}`} onClick={onClick}>
            <p>{text}</p>
        </div>
    );
}

export default MainText;