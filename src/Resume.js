import React from 'react';
import {useLocation} from 'react-router-dom';
import data from './data/data.json';

let Resume = () => {
    let uselocation = {useLocation};
    let arrayIndex = uselocation.info.id;
    let singleProfile = data.profile[arrayIndex];

    return (
        <div>
            <div>
                <h2>
                    {singleProfile.basic.name}
                </h2>
            </div>

            <div>
            <h2>
                {singleProfile.skills.map((skillval, skillIdx) => (

                    <div key={skillIdx}>
                        <h3>{skillval.type}</h3>
                        {singleProfile.skills.map((dataVal, valIdx) => (
                            <span key={valIdx}> 
                                {dataVal.values}
                            </span>
                        ))}
                    </div>
                )
                
                )

                }
            </h2>

            </div>
        </div>
    );

}
export default Resume;