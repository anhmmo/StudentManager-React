import React, { Component } from 'react';

class StudentPopup extends Component {
    render() {
        return (
                <div id="student__popup" className="student__popup--hide">
                    <div className="student__infomation">
                        <div id="student__infomation--info" className="student__infomation--default ">info</div>
                        <div id="student__infomation--credit" className="student__infomation--credit">credit</div>
                        <div id="student__infomation--portfolio" className="student__infomation--portfolio">portfolio</div>
                    </div>
                    <div className="student__text">
                        <ul id="student__text-1" className="student__text--default">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Vivamus nec dui tincidunt, placerat orci nec, sagittis nibh</li>
                            <li>Integer id justo sem. Duis ac nibh efficitur, pellentesque leo sodales, aliquam nulla</li>
                            <li>Nunc ut ultricies sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                            </li>
                            <li>Quisque fringilla dolor ante. Phasellus orci augue, luctus non varius non, posuere vel metus</li>
                            <li>Vestibulum ut est pulvinar, convallis felis non, volutpat ex. Integer sollicitudin luctus purus eget egestas.</li>
                        </ul>
                        <ul id="student__text-2">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Vivamus nec dui tincidunt, placerat orci nec, sagittis nibh</li>
                            <li>Integer id justo sem. Duis ac nibh efficitur, pellentesque leo sodales, aliquam nulla</li>
                            <li>Nunc ut ultricies sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                            </li>
                            <li>Quisque fringilla dolor ante. Phasellus orci augue, luctus non varius non, posuere vel metus</li>
                            <li>Vestibulum ut est pulvinar, convallis felis non, volutpat ex. Integer sollicitudin luctus purus eget egestas.</li>
                        </ul>
                        <ul id="student__text-3">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Vivamus nec dui tincidunt, placerat orci nec, sagittis nibh</li>
                            <li>Integer id justo sem. Duis ac nibh efficitur, pellentesque leo sodales, aliquam nulla</li>
                            <li>Nunc ut ultricies sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas
                            </li>
                            <li>Quisque fringilla dolor ante. Phasellus orci augue, luctus non varius non, posuere vel metus</li>
                            <li>Vestibulum ut est pulvinar, convallis felis non, volutpat ex. Integer sollicitudin luctus purus eget egestas.</li>
                        </ul>
                    </div>
                    <div id="hide-this-gallery" className="small-gallery">
                        <div id="img-boxs1" className="img-box">
                            <div className="img-content box1" />
                        </div>
                        <div id="img-boxs2" className="img-box">
                            <div className="img-content box2" />
                        </div>
                        <div id="img-boxs3" className="img-box">
                            <div className="img-content box3" />
                        </div>
                        <div id="img-boxs4" className="img-box">
                            <div className="img-content box4" />
                        </div>
                        <div id="img-boxs5" className="img-box">
                            <div className="img-content box5" />
                        </div>
                        <div id="img-boxs6" className="img-box">
                            <div className="img-content box6" />
                        </div>
                        <div id="img-boxs7" className="img-box">
                            <div className="img-content box7" />
                        </div>
                        <div id="img-boxs8" className="img-box">
                            <div className="img-content box8" />
                        </div>
                    </div>
                    
                    <div id="student__gallery">
                    <div id="openThis" className="student__gallery student1"></div>
                    <div id="small-gallery" className="small-gallery">
                        <div id="img-box1" className="img-box" >
                        <div className="img-content box1" />
                        </div>
                        <div id="img-box2" className="img-box" >
                        <div className="img-content box2" />
                        </div>
                        <div id="img-box3" className="img-box" >
                        <div className="img-content box3" />
                        </div>
                        <div id="img-box4" className="img-box" >
                        <div className="img-content box4" />
                        </div>
                        <div id="img-box5" className="img-box" >
                        <div className="img-content box5" />
                        </div>
                        <div id="img-box6" className="img-box" >
                        <div className="img-content box6" />
                        </div>
                        <div id="img-box7" className="img-box" >
                        <div className="img-content box7" />
                        </div>
                        <div id="img-box8" className="img-box" >
                        <div className="img-content box8" />
                        </div>
                    </div>
                    <i id="iconHide" className="hideImageIcon fas fa-window-close" />
                    <i id="iconShow" className="hideThisIcon fas fa-image" />
                    </div>
                    <i id="gallery-close" className="popup-close fas fa-times-circle" />
                    <i id="gallery-close-main" className="popup-close-2 fas fa-times-circle" />
            </div>
        );
    }
}

export default StudentPopup;