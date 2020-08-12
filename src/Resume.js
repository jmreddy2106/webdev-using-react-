import React from 'react';
import {useLocation} from 'react-router-dom';
import data from './data/data.json';

let Resume = () => {
    let uselocation = useLocation();
    let arrayIndex = [uselocation.profileid.id];
    let singleProfile = data.profile[arrayIndex];


    let web = {
        border: '1px solid #adabab',
        borderRadius: '5px',
        background: 'bisque',

    };
    let prog = {
        border: '1px solid #adabab',
        borderRadius: '5px',
        background: '#a9dc94',

    };
    let db = {
        border: '1px solid #adabab',
        borderRadius: '5px',
        background: '#b3c9f9', 
 
    };

    function getCSS(type) {
        if(type === 'Web Tech') {
            return web;
        }else if( type === 'Programming Lang') {
            return prog;
        }else if( type === 'Databases' ) {
            return db;
        }
    }

    return (
        <div className="parent1">
            <div className="child11">
                <h2>
                    {singleProfile.basic.name}
                </h2>
            </div>

            <div className="child11">
                <h2>
                    {singleProfile.skills.map((skillval, skillIdx) => (                        
                        <div key={skillIdx} >
                            <h3>{skillval.type}</h3> 
                                
                                {skillval.values.map((val, valIndex) => (
                                   <span key={valIndex} className="lang">
                                          <h6 style={getCSS(skillval.type)}> 
                                            {val} 
                                          </h6>                                       
                                   </span>   
                                )
                                )}
                                                     
                        </div>
                    ))}
                </h2>

            </div>
        </div>
    );

}


export default Resume;