import React, { Component } from 'react';

export default class Roster extends Component {
    render(){
        let teamData = this.props.teamData;
        return (
        <div className = 'roster' id = 'roster' >   
        <div>
        <h2>{teamData.teamName}</h2>
        
        <div className='players-container'>
        {teamData.players.sort(function(a, b){
                if(a.playerName < b.playerName) { return -1; }
                if(a.playerName > b.playerName) { return 1; }
                return 0;
        }).map((item) => {
        return (
        <div className='players'>
                
                <img src = {(`${item.imgurl}`)} alt = {item.playerName}/> 
                <div className='players-overlay'>
                <h1>{item.playerName}</h1>
                <p>{item.playerWiki}</p>
                </div>
        </div>
        )})}
        </div>
        </div>
        </div> 
        
        )          
}

}
