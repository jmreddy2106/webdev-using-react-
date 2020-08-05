import React from 'react';
import AndhraBank from './AndhraBank';
import UnionBank from './UnionBank';

const Banks = () => {

    return (
    <div>
        <h1>Bank Component</h1>

        <div>
            <h2>Andhra bank Details</h2>
            <AndhraBank name="Andhra Bank" branch="BZA" />
        </div>
        <div>
            <h2>Union bank Details</h2>
            <UnionBank name="Union Bank" branch="Vizag" />
        </div>
        
    </div>
    );
}


export default Banks;