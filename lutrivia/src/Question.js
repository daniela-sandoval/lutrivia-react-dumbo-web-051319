import React from 'react';

class Question extends React.Component {
  constructor (props){
    super(props)
    this.state = {
      color: "",
      chosenAnswer: ""
    }
  }

  checkAnswer = (event) => {
    // console.log(this.state.color);
    // debugger
    if(event.target.value === this.props.answer.toString()){
      this.setState({color: "green", chosenAnswer: event.target.value})
      // event.target.style.backgroundColor= 'green'
    } else {
      // event.target.style.backgroundColor= 'green'
      this.setState({color: 'red', chosenAnswer: event.target.value})
    }
  }

  render () {
    // <button onClick={this.checkAnswer} style={{backgroundColor: this.props.answer === false ? this.state.color : ""}} value= 'false' >False</button>
    // <button onClick={this.checkAnswer} style={{backgroundColor: this.props.answer === true ? this.state.color : ""}} value= 'true' >True</button>
    console.log(this.state);
    return (
      <div>
        <h5>{this.props.question}</h5>

        <button onClick={this.checkAnswer} style={{backgroundColor: this.state.chosenAnswer === "true" ? this.state.color : ""}} value= 'true' >True</button>
        <button onClick={this.checkAnswer} style={{backgroundColor: this.state.chosenAnswer === "false" ? this.state.color : ""}} value= 'false' >False</button>
      </div>
    )
  }

}

export default Question;
