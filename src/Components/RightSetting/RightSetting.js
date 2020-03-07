import React, { Component } from 'react';

class RightSetting extends Component {
    render() {
        return (
            <div id="right-setting" className="right-setting">
                <i id="open-setting" className="open-setting fas fa-users-cog" />
                <div id="save-file" className="save-button">
                <a href="http://sdgs.com" id="download-btn" download><i className="fas fa-download" /></a>
                <i id="create-btn" className="fas fa-cloud-download-alt" />
                <i id="download-loading" className="fas fa-spinner" />
                <span className="circle-1" />
                <span className="circle-2" />
                </div>
                <div id="remove-all-students" className="save-button2">
                <i className="fas fa-user-slash" />
                </div>
                <div id="restore-default" className="save-button3">
                <i className="fas fa-undo" />
                </div>
            </div>
        );
    }
}

export default RightSetting;