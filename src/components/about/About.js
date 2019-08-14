import React, {Component} from 'react';

export default class About extends Component {
    render(){
        let teamData = this.props.teamData;
        return (
       <div id = 'about'>
           <h1>About us</h1>
            <div>
                <p>
                    {teamData.teamBio}
                </p>
            </div>


        </div>
        )          
}


}
