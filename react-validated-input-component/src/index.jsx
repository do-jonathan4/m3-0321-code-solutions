import React from 'react'
import ReactDOM from 'react-dom'

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: '',
      valid: 'none'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log('password: ', this.state);

    const password = this.state.password

    password.length < 8 && password.length > 0 ? this.setState({ valid: 'short' })
      : password.length > 8 ? this.setState({ valid: 'correct' })
      : this.setState({ valid: 'none' })

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ password: event.target.value });
  }
  render() {
    const valid = this.state.valid

    const message = valid === 'short' ? 'Your password is too short'
      : valid === 'correct' ? ''
      : 'A password is required';

    const icon = valid === 'short' || valid === 'none' ? 'fas fa-times'
      : 'fas fa-check'

    const color = valid === 'short' || valid === 'none' ? 'red'
      : 'green'

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          </label>
          <input type="submit" value="Submit" />
          <i className={`${icon} ${color}`}></i>
        </form>
        <p className={color}>{message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <ValidatedInput />,
  document.getElementById('root')
)
