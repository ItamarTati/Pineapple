import React, { Component } from 'react';

export default class Media extends Component {
    render()
    {
        return (
            <div id = 'social media' className = 'media'>
                <h1>Social Media</h1> 
                <div className = 'container'>
                    <div className = 'twitter'>
                        <a class="twitter-timeline" data-height="400" data-dnt="true" data-theme="light" 
                        data-link-color="#2B7BB9"  href="https://twitter.com/PlayOverwatch?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
                        Tweets by PlayOverwatch</a> <script async src="https://platform.twitter.com/widgets.js" 
                        charset="utf-8"></script>
                    </div>
                    <div className = 'youtube'>
                        <iframe src="https://www.youtube.com/embed/FqnKB22pOC0" 
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen title = 'Clarity'></iframe>                 
                    </div>
                </div>
            </div>
            
        );
    }
}
