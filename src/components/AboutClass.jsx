import React, { Component } from 'react'
class AboutClass extends Component {

    constructor(props) {
      super(props)
    
      this.state ={
        name : this.props.name,
        work : this.props.work,
        count : 0,
        username:""
      }
    }
    clickEvent()
    {
       this.setState({
        name:"About class component",
        count:this.state.count + 1

       }
       )
        console.log("click event in class")
    }
    mouseOverEvent()
    {
        console.log("mouse over evebt in class")
    }
    inputChange(event){
        this.setState({
            username : event.target.value
        })
    }

  render() {
    this.state.name="About class component"
    return (
      <div>AboutClass
      <br></br>
        <b>Name: {this.state.name}</b> <br></br>
        <b>Work: {this.state.work}</b>  <br></br> 
        <b>count:{this.state.count}</b><br></br>
        <b>username:{this.state.username}</b><br></br>
        <input onChange={(event)=>this.inputChange(event)}></input><br></br> 
        <button onClick={()=>this.clickEvent()} onMouseOver={()=>this.mouseOverEvent()}> click</button>

      </div>
    )
  }
}
export default AboutClass


