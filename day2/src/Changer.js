import React from 'react';
import './Changer.css';

const imgs = ['img/boat1.jpg','img/boat2.jpg','img/boat3.jpg','img/boat4.jpg','img/boat5.jpg',];

const Image = (props)=>{
    return <div id="imageholder">
    <img src={props.path} id="image" />
    <p>{props.text}</p>
    </div>};

class Changer extends React.Component {
    constructor(){
        super();
        this.state = {img: imgs[0]};
    }
    changeBoat(){
        this.setState({img: imgs[Math.floor(Math.random()*imgs.length)]});
    }
    render(){
        return(
            <div className="Changer">
            <h1>Pictures</h1>
            <Image path = {this.state.img} text="Text for all boats"/>
            <button onClick={this.changeBoat.bind(this)}>Change boat</button>
            </div>
        );
    }
}
export default Changer;