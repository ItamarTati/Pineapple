import React from 'react'

class Navbar extends React.Component {
    render(){
        return(
            <div >
            <nav class="navbar">
                    <ul>
                        <a href="#home">
                            <img className = 'overwatchLogo' src = './images/pineapple logo .jpg' alt ="Overwatch"/>
                        </a>
                        <li><a href="#home">The Pineapples</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#roster">Roster</a></li>
                        <li><a href="#social media">Social Media</a></li>
                    </ul>
            </nav>
            </div>                    
        )
    }
}
  
export default Navbar 
  



  
