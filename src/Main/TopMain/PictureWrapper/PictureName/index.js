import React from 'react';

class PictureName extends React.Component {
    render() {
        return (
            <div className="pictureName">{this.props.currPic.pic_name}</div>
        );
    }
}

export default PictureName;