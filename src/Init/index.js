import React from 'react';
import initPhoto from './open_screen.png'

class Init extends React.Component {

    onChange = (e) => {
        let file = e.target.files;
        let reader = new FileReader();

        reader.onload = (e) => {
            let text = reader.result;
            this.props.updateState({userData: JSON.parse(text), screen: "BeforeStart"});
        };
        reader.readAsText(file[0]);
    };

    render() {
        return (
            <div className="init">
                <img id="peoplePhoto" src={initPhoto}/>
                <input type="file" name="file" onChange={(e) => this.onChange(e)} className="file"/>
            </div>
        );
    }
}

export default Init;