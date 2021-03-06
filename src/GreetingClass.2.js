import React from 'react'
import Row from './Row'

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Mary',
      surname: 'Hoppins'
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value
    })
  }

  componentDidMount() {
    document.title = this.state.name + ' ' + this.state.surname
  }

  componentDidUpdate() {
    document.title = this.state.name + ' ' + this.state.surname
  }

  render() {
    return (
      <section>
        <Row label="Name">
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          {this.state.name}
        </Row>
        <Row label="Surname">
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
          {this.state.surname}
        </Row>
      </section>
    )
  }
}