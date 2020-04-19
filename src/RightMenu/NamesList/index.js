import React from 'react';
import deleteIcon from './delete.png';

class NamesList extends React.Component {

    getList = () => {
        let listNum = this.props.num;
        let namesArray = [];
        this.props.state.userData.pictures.forEach(e => {
            if (listNum === e.selected_option) {
                namesArray.push(e.pic_name);
            }
        });
        return namesArray;
    };

    onDelete = (picture, picIndex) => {
        let newState = {...this.props.state};
        newState.userData.pictures[picIndex].selected_option = 0;
        newState.currentPic = 0;
        this.props.updateState(newState);
    };

    render() {
        return (
            <div className="namesList">
                {this.props.state.userData.pictures.map((e, index) => {
                    if (this.props.state.currentGroup === e.selected_option) {
                        return <span className="listItem">
                            {e.pic_name}
                            <span onClick={() => this.onDelete(e, index)}>
                                <img src={deleteIcon} className="deletePerson"/>
                            </span>
                        </span>
                    }
                })}
            </div>
        );
    }
}

export default NamesList;