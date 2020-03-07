import React, { Component } from 'react';

class RightContainer extends Component {
    render() {
        return (
            <div id="right-containers" className="right-container">
                
                <form action="#" id="main-form">
                    <div className="main-form__input">
                        <label>Name</label>
                        <input id="name" type="text" name="Name" placeholder="Enter your name" />
                        <i />
                        <i />
                        <i className="requiredIcon fas fa-star-of-life" />
                        <p id="notice-text" className="notice-display-none">* At least 2 characters and no number</p>
                    </div>
                    <div className="main-form__input">
                        <label>Address</label>
                        <input id="address" type="text" name="Address" placeholder="Enter your address" />
                        <i />
                        <i />
                        <i className="requiredIcon fas fa-star-of-life" />
                        <p id="notice-text" className="notice-display-none">* Please fill out this field</p>
                    </div>
                    <div className="main-form__input">
                        <label>Phone</label>
                        <input id="phone" type="number" name="Phone" placeholder="Enter your phone" />
                        <i />
                        <i />
                        <i className="requiredIcon fas fa-star-of-life" />
                        <p id="notice-text" className="notice-display-none">* Please enter you phone number</p>
                    </div>
                    <div className="main-form__input">
                        <label>Email</label>
                        <input id="email" type="email" name="Email" placeholder="Enter your email" />
                        <i />
                        <i />
                        <i className="requiredIcon fas fa-star-of-life" />
                        <p id="notice-text" className="notice-display-none">* Incorrect email address format</p>
                    </div>
                    <div className="main-form__input">
                        <label>Age</label>
                        <input id="age" type="number" name="Age" placeholder="Enter your age" />
                        <i />
                        <i />
                        <i className="requiredIcon fas fa-star-of-life" />
                        <p id="notice-text" className="notice-display-none">* AGE must be over 17 and less than 99</p>
                    </div>
                    <div className="main-form__input">
                        <label>Which option is your current job?</label>
                        <select id="selectOption">
                            <option disabled>Select current job</option>
                            <option value={1}>Student</option>
                            <option value={2}>Software developer</option>
                            <option value={3}>Web-fullstack developer</option>
                            <option value={4}>Software engineer</option>
                        </select>
                        <i />
                        <i />
                        <i className="requiredIcon fas fa-star-of-life" />
                        <p id="notice-text" className="notice-display-none">* Please select your current job</p>
                    </div>
                    <button type="submit" id="submit" className="submit-button">Save</button>
                    <button id="exit-form">Exit</button>
                </form>
            </div>
        );
    }
}

export default RightContainer;