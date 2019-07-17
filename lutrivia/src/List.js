import React from 'react';
import Question from './Question.js'

class List extends React.Component {

  questions = () => {
    return this.props.questions.map(question => <Question question={question.text} answer={question.answer} />
    )
  }

  render () {
    return (
      <ul>
        {this.questions()}
      </ul>
    )
  }
}

export default List;
