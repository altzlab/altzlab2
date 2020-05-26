import React from 'react';

class BeforeStart extends React.Component {

    onClick = () => {
        this.props.updateState({...this.props.state, screen: 'Main'});
    };

    render() {
        return (
            <div className="beforeStartContainer">
                <div className="viewDiv"></div>
                <p className="beforeStart">
                    <div>!היי, דודה שהסכמת להשתתף בניסוי שלנו</div>
                    <div>כדי להתחיל צריך ללחוץ על הכפתור</div>
                    <div onClick={this.onClick} className="startButton">התחל</div>
                </p>
            </div>
        );
    }
}


export default BeforeStart;
