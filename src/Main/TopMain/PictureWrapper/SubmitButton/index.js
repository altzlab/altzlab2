import React from 'react';

class SubmitButton extends React.Component {

    downloadTxtFile = () => {
        const element = document.createElement("a");
        const file = new Blob(
            [JSON.stringify(this.props.state.userData, null, 2)],
            {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "results_file.txt";
        document.body.appendChild(element);
        element.click();

        setTimeout(() => this.props.updateState({...this.props.state, screen: 'Submitted'}), 600);
    };

    render() {
        return (
            <div className="submitButtonContainer">
                <div onClick={this.downloadTxtFile} className="submitButton">שליחה</div>
            </div>
        );
    }
}

export default SubmitButton;