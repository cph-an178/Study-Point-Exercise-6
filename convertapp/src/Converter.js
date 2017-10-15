import React from 'react';

const Input = (props)=>{
    return <input type="number" id={props.id} onChange={props.onChange} value={props.value} />
};
const converterType = ['kiloPound','fahrenheitCelcius'];

class Converter extends React.Component {
    constructor() {
        super();
        this.state = {kilo: 0, pound: 0};
        this.convert = this.convert.bind(this);
    }
    convert(event){
        const who = event.target.id;
        const value = event.target.value;
        if(who === 'kilo') {
            //const pound = kilo * 2.20462;
            //const kilo = value;
            const pound = value * 2.20462;
            this.setState({kilo: value, pound: pound}); // setState ændre DOM ovs.
        }
        else if (who === 'pound') {
            //const kilo = pound * 0.45349;
            //const pound = value;
            const kilo = value * 0.45349;
            this.setState({kilo: kilo, pound: value});
        }
    }
    render(){
        return (<div>
            <h1>Kilo to pound converter</h1>
            <span>Kilo:</span><Input id="kilo" onChange={this.convert} value={this.state.kilo}/><br/>
            <span>Pound:</span><Input id="pound" onChange={this.convert} value={this.state.pound}/>
            </div>);
    }
};

export default Converter;