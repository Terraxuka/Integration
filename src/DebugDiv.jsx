import React from 'react';

function DebugDiv({ value, onChange }) {
    return (
        <input className='DebugDiv' type="number" value={value} onChange={(e) => onChange(e.target.value)} />
    );
}

export default DebugDiv;