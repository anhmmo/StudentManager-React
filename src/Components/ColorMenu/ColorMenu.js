import React, { Component } from 'react';

class ColorMenu extends Component {
    render() {
        return (
            <div id="colorMenu" className="hideMenu">
                <i id="colorSetting" className="colorSetting fas fa-cog" />
                <div className="colorBox">
                <p>CHOOSE COLORS</p>
                <div className="colorLine">
                    <div id="changeColorGreen" className="color colorGreen" />
                    <div id="changeColorRed" className="color colorRed" />
                    <div id="changeColorBlue" className="color colorBlue" />
                    <div id="changeColorViolet" className="color colorViolet" />
                    <div id="changeColorYellow" className="color colorYellow" />
                </div>
                <div className="colorLine2">
                    <div id="changeColorPink" className="color2 colorPink" />
                    <div id="changeColorGray" className="color2 colorGray" />
                    <div id="changeColorOrange" className="color2 colorOrange" />
                    <div id="changeColorPurple" className="color2 colorPurple" />
                    <div id="changeColorWhite" className="color2 colorWhite" />
                </div>
                </div>
            </div>
        );
    }
}

export default ColorMenu;