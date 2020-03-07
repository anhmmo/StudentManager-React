import React, { Component } from 'react';

class PopupSection extends Component {
    render() {
        return (
            <div id="popup-section" className="edit__popup">
                <i id="popup-close" className="popup-close fas fa-times-circle" />
                <form action="#" id="popup__form">
                <div className="main-form__input popupform">
                    <label>Name</label>
                    <input id="name2" type="text" name="Name" placeholder="Enter your name" />
                    <i className="falseIconEmpty2 fas fa-times" />
                    <i className="requiredIcon fas fa-star-of-life" />
                </div>
                <div className="main-form__input popupform">
                    <label>Address</label>
                    <input id="address2" type="text" name="Address" placeholder="Enter your address" />
                    <i className="falseIconEmpty2 fas fa-times" />
                    <i className="requiredIcon fas fa-star-of-life" />
                </div>
                <div className="main-form__input popupform">
                    <label>Phone</label>
                    <input id="phone2" type="number" name="Phone" placeholder="Enter your phone" />
                    <i className="falseIconEmpty2 fas fa-times" />
                    <i className="requiredIcon fas fa-star-of-life" />
                </div>
                <div className="main-form__input popupform">
                    <label>Email</label>
                    
                    <input id="email2" type="email" name="Email" placeholder="Enter your email" />
                    <i className="falseIconEmpty2 fas fa-times" />
                    <i className="requiredIcon fas fa-star-of-life" />
                </div>
                <div className="main-form__input popupform">
                    <label>Age</label>
                    <input id="age2" type="number" name="Age" placeholder="Enter your age" />
                    <i className="falseIconEmpty2 fas fa-times" />
                    <i className="requiredIcon fas fa-star-of-life" />
                </div>
                <div className="main-form__input popupform">
                    <label>Which option is your current job?</label>
                    <select id="selectOption2">
                    <option disabled>Select current job</option>
                    <option value={1}>Student</option>
                    <option value={2}>Software developer</option>
                    <option value={3}>Web-fullstack developer</option>
                    <option value={4}>Software engineer</option>
                    </select>
                    <i className="falseIconEmpty2 fas fa-times" />
                    <i className="requiredIcon fas fa-star-of-life" />
                </div>
                <button type="submit" id="submit2" className="submit-button2">
                    Change
                </button>
                </form>
            </div>
        );
    }
}

export default PopupSection;