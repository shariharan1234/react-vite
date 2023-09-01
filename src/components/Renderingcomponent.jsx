import React, { Component } from 'react'

export class Renderingcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        text:"condition",
        show:false,
        fruits: ["mango","orange","kiwi","grape","mango"]
      }
    }
    changeshow(){
this.setState({show:!this.state.show 
        })
    }
  render() {
    var varible=this.state.show? 'hide':'show'
    return (
    <>
    <h1>fruits</h1>

    <ul>
    {
        this.state.fruits.map((fruit,index)=>{
            return<li key={index}>{fruit}</li>})
    }
        </ul>
      <div>Renderingcomponent</div>
      {this.state.show && this.state.text }
      <button onClick={()=>this.changeshow()}>{this.state.show ? "hide" : "show"}</button>
        </>
    )
  }
}

export default Renderingcomponent