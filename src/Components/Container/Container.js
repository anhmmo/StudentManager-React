import React, { Component } from 'react';
import RightContainer from './RightContainer/RightContainer';
import ListItem from './ListItem/ListItem';
import DeletePersonBox from './DeletePersonBox/DeletePersonBox';
import UndoDeletedItem from './UndoDeletedItem/UndoDeletedItem';

class Container extends Component {
    render() {
        return (
            <div className="container">
            
                <DeletePersonBox />

                <UndoDeletedItem />

                <ListItem />
                
                <RightContainer />

            </div>
        );
    }
}

export default Container;