import React, { Component } from 'react';

class UndoDeletedItem extends Component {
    render() {
        return (
            <div id="undo-deleted-item">
                <i id="restore-deleted" className="fas fa-undo-alt" />
                <span className="restore-tooltip">restore deleted students</span>
            </div>
        );
    }
}

export default UndoDeletedItem;