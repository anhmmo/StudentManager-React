import React, { Component } from 'react';

class DeletePersonBox extends Component {
    render() {
        return (
            <div id="delete-person-box">
                <p id="delete-counter" />
                <i id="delete-all-person" className="fas fa-user-times" />
                <span className="delete-tooltip">delete selected students</span>
            </div>
        );
    }
}

export default DeletePersonBox;