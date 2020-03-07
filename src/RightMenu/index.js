import React from 'react';
import NamesList from "./NamesList";
import Instructions from "./Instructions";



class RightMenu extends React.Component{

    getGroupTitle = () =>{
      let groupNum =  this.props.state.currentGroup;
      let groupName;
        switch (groupNum) {
            case 1:
                groupName = "מי שאפנה אליו במצב חירום";
                break;
            case 2:
                groupName = "חברים קרובים";
                break;
            case 3:
                groupName = "חברים";
                break;
            case 4:
                groupName = "אנשים שאני בקשר פעיל איתם";
                break;
            case 5:
                groupName = "אנשים שאני לא בקשר איתם";
                break;
            case 6:
                groupName = "אנשים שאני לא באמת מכיר";
                break;
            default:
                groupName = "select group";
        }
        return groupName;
    };
    render(){
        return(
            <div className="rightMenu">
                <div className="groupDisplacer">
                    <div className="listTitle">
                        {this.getGroupTitle()}
                    </div>
                    <NamesList state={this.props.state} updateState={this.props.updateState}/>
                </div>
                <Instructions />
            </div>
        );
    }
}

export default RightMenu;