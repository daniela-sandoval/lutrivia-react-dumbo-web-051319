import React from 'react';
import Header from './Header'
import List from './List'
import NameForm from './NameForm'



class App extends React.Component {
  render () {

    return (
      <div className="App">
        <Header />
        <List questions={this.props.data.questions}/>
        <NameForm />
      </div>
    )
  }
}

export default App;
