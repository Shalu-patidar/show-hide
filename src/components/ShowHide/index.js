// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  hideShowFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  hideShowLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg">
        <h1 className="heading">Show/Hide</h1>
        <div className="card-btn">
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={this.hideShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {isFirstName ? <p className="para">joe</p> : null}
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={this.hideShowLastName}
            >
              Show/Hide Lastname
            </button>
            {isLastName ? <p className="para">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
