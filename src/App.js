import React, {Component} from 'react';
import './style.css';
import Main from "./Main";
import RightMenu from "./RightMenu";

class App extends React.Component {

    state = {
        currentPic: 0,
        currentGroup: -1,

        userData: {
            user: "galit",
            pictures:
                [
                    {
                        index: 0,
                        pic_id: 1,
                        pic_name: "Bibi Netanyahu",
                        src: "https://images.haarets.co.il/image/fetch/w_2169,h_1261,x_0,y_39,c_crop,g_north_west/w_857,h_482,q_auto,c_fill,f_auto/fl_any_format.preserve_transparency.progressive:none/https://www.haaretz.co.il/polopoly_fs/1.7818380!/image/2444753387.jpg",
                        selected_option: 0,
                    },
                    {
                        index: 1,
                        pic_id: 2,
                        pic_name: "Adele",
                        src: "https://img.discogs.com/eZT3otJCPuuboIuTNll0jwseNK4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1638187-1514107548-1863.jpeg.jpg",
                        selected_option: 0,
                    },
                    {
                        index: 2,
                        pic_id: 3,
                        pic_name: "Justin Bieber",
                        src: "https://upnewsinfo.com/wp-content/uploads/2020/01/Justin-Bieber-talks-about-his-depression-while-crying-quotI-don39t.jpg",
                        selected_option: 0,
                    },
                    {
                        index: 3,
                        pic_id: 4,
                        pic_name: "Marilyn Monroe",
                        src: "https://i2.wp.com/www.ipwatchdog.com/wp-content/uploads/2017/01/marilyn-monroe-waxwork.jpg?w=250&ssl=1",
                        selected_option: 0,
                    },
                    {
                        index: 4,
                        pic_id: 5,
                        pic_name: "Ilana dayan",
                        src: "https://res.cloudinary.com/dnn7h5tec/image/upload/w_770,h_430,f_auto,q_auto,c_fill/prod/user_image_uploads/funz/Hk5U8GbbgNIFs149WJLPIeMGXLnGn7QJ/original/2019_08_27_16_54_23_____1566914067004.jpg",
                        selected_option: 0,
                    },
                    {
                        index: 5,
                        pic_id: 6,
                        pic_name: "Winnie The Pooh",
                        src: "https://ohmy.disney.com/wp-content/uploads/2016/01/Pooh-1000x600.jpg",
                        selected_option: 0,
                    },
                ]
        },
    };

    updateState = (newState) => {
        this.setState(newState);
    };

    onChange = (e) => {
        let file = e.target.files;
        let reader = new FileReader();

        reader.onload = (e) => {
            let text = reader.result;
            this.setState({userData: JSON.parse(text)});
        };

        reader.readAsText(file[0]);
    };

    render() {
        return (
            <div className="app">
                <Main state={this.state} updateState={this.updateState}/>
                <RightMenu state={this.state} updateState={this.updateState}/>
                {/*<input type="file" name="file" onChange={(e) => this.onChange(e)} className="file"/>*/}
            </div>
        );
    }
}

export default App;
