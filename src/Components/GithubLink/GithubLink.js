import React, { Component } from 'react';

class GithubLink extends Component {
    render() {
        return (
         <div className="github-link">
            <a href="https://github.com/anhmmo/studentList" title="See Source Codes" target="_blank" rel="noopener noreferrer">See project <i className="fas fa-code" /> on Github</a>
         </div>
        );
    }
}

export default GithubLink;