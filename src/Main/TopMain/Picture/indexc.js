import React from 'react';


class Picture extends React.Component {
    render() {
        return (
            <div className="picture">
                <img src={this.props.currPic.src} className="realPicture"
                     alt="Smiley face" height="100%" width="100%"/>
            </div>
        );
    }
}

export default Picture;