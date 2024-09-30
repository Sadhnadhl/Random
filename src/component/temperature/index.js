import React from "react";
import Check from "./verdict";
class Temperature extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:"",
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            temperature:e.target.value,
        });
    }
    render(){
        return(
            <div>
            <label>Enter temperature</label>
            <input value={this.state.temperature} onChange={this.handleChange} type="number"/>
            <Check celsius={parseFloat(this.state.temperature)} />
            </div>
        )
    }
}
export default Temperature;