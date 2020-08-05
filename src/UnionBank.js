import React ,{Component} from 'react';

class UnionBank extends Component {

    render(props){

        return(

               <div>
                   <h4>This is class component with props</h4>
                    <h4>This is {this.props.name} located in {this.props.branch}</h4> 
               </div> 
        );

    }

};

export default UnionBank;