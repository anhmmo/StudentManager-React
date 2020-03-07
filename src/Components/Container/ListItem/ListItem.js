import React, { Component } from 'react';

class ListItem extends Component {
    render() {
        return (
            <div id="list-item" className="list-item">
                <div className="item__box" id="scroll0">
                    <div className="item__box--info">
                        <p>Name: Christian Nurmi </p>
                        <p>Address : Jykintie 58 33980 PIRKKALA </p>
                        <p>Phone : 0411548016 </p><p>Email: ChristianNurmi@dayrep.com </p>
                        <p>Age: 33 </p>
                        <p>Job : Sofware engineer</p>
                    </div>
                    <div>
                        <input className="myInput" type="text" defaultValue="Christian Nurmi, Jykintie 58 33980 PIRKKALA, 0411548016, ChristianNurmi@dayrep.com, 33, Sofware engineer" id="myInput0" />
                        <div id="copiedStudent0" className="copyStudent">Copy Student Info</div>
                    </div>
                    <div className="item__box--icon">
                        <i id="delete0" className="deleteInfo fas fa-trash-alt" aria-hidden="true" />
                        <i id="edit0" className="editInfo fas fa-edit" aria-hidden="true" />
                        <i id="copy0" className="copyIcon fab fa-creative-commons-share" aria-hidden="true" />
                        <i id="info0" className="infoIcon fas fa-info-circle" aria-hidden="true" />
                    </div>
                    <i className="iconcircle fas fa-circle" aria-hidden="true" />
                    <i className="iconcircle2 fas fa-circle" aria-hidden="true" />
                    <div className="itemNumberBox">1</div>
                </div>
            </div>
        );
    }
}

export default ListItem;