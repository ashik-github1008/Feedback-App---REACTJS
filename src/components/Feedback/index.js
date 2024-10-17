// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackClick: false}

  emojiClick = () => {
    this.setState(prevState => ({
      isFeedbackClick: !prevState.isFeedbackClick,
    }))
  }

  render() {
    const {isFeedbackClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    let renderContainerEl

    if (isFeedbackClick) {
      renderContainerEl = (
        <>
          <div className="thank-you-container">
            <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
            <h1 className="thank-you-text">Thank You!</h1>
          </div>
          <p className="end-desc">
            We will use your feedback to improve our customer support
            performance
          </p>
        </>
      )
    } else {
      renderContainerEl = (
        <>
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-container">
            {emojis.map(eachEmoji => (
              <li className="each-emoji-container" key = {eachEmoji.id}>
                <img
                  src={eachEmoji.imageUrl}
                  className="emoji"
                  onClick={this.emojiClick}
                  alt={eachEmoji.name}
                />
                <p className="react-text">{eachEmoji.name}</p>
              </li>
            ))}
          </ul>
        </>
      )
    }

    return (
      <div className="app-container">
        <div className="main-container">{renderContainerEl}</div>
      </div>
    )
  }
}

export default Feedback
