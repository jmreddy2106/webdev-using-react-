import React, {Component} from 'react';



class Employee extends Component{

    state = {
        name: "Jagan Mohan Reddy",
        nameColor: '#45daa3'
    }

    render(){

        const nameColor1 = {color: this.state.nameColor}
    
        setTimeout(() => {
            this.setState({name: "Dr. Jagan Mohan Reddy D", nameColor: "#f2f9f6"})
        }, 5000);


        return(

            <div>
                <h4 style={nameColor1}> My name is {this.state.name}</h4>
            </div>
        );
    }
}

export default Employee;