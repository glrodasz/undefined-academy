import * as React from "react";

const NavigationBar = () => {
    return (
        <div className="navegacion__buscador">
            <div className="input">
            <input type="text" placeholder="Search" style={{ padding: '0.5rem', border: 'none', marginRight: '1rem' }} />
            <button style={{ backgroundColor: '#fff', color: '#3f51b5', border: 'none', padding: '0.5rem 1rem', borderRadius: '5px', cursor: 'pointer' }}>Search</button>
            </div>
        </div>
    
            );
};

export default NavigationBar;