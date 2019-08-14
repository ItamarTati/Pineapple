import React, { PureComponent } from 'react';


class Header extends PureComponent {
    
    constructor(props) {
        super(props);

        this.state = {
            isVideoVisible: false,
        };

        this.toggleVideoVisibility = this.toggleVideoVisibility.bind(this);
    }

options
    toggleVideoVisibility() {
        const {
            isVideoVisible,
        } = this.state;

        this.setState({ isVideoVisible: !isVideoVisible });
    }
    render() {
        const {
            isVideoVisible,
        } = this.state;

        return (
            <div>
            <header id = 'home' className = 'header'>   
            {     
                        (
                            <video
                                poster= "https://www.dropbox.com/s/slv9jiut2je5jb5/overwatchVideo.mp4?raw=1"
                                preload="true"
                                autoPlay
                                muted
                                loop="loop"
                            >
                                <source
                                    src= "https://www.dropbox.com/s/slv9jiut2je5jb5/overwatchVideo.mp4?raw=1"
                                    type="video/webm"
                                />
                                <source
                                    src= "https://www.dropbox.com/s/slv9jiut2je5jb5/overwatchVideo.mp4?raw=1"
                                    type="video/mp4"
                                />
                            </video>
                        ) }     
                { isVideoVisible && this.renderVideoModal() }
            </header>
            </div>
        );
    }
}

export default Header;
