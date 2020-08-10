import React from 'react';
import {useLocation} from 'react-router-dom';
import data from './data/data.json';

let Resume = () => {
    let uselocation = useLocation();
    let arrayIndex = [uselocation.profileid.id];
    let singleProfile = data.profile[arrayIndex];

    return (
        <div className="parent1">
            <div className="child1">
                <h2>
                    {singleProfile.basic.name}
                </h2>
            </div>

            <div className="child1">
                <h2>
                    {singleProfile.skills.map((skillval, skillIdx) => (                        
                        <div key={skillIdx} >
                            <h3>{skillval.type}</h3>                           
                                {singleProfile.skills[skillIdx].values.map((val, valIndex) => (
                                   <span key={valIndex} className="lang">
                                      
                                           {val}
                                       
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