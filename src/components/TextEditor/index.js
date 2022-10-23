import {Component} from 'react'
import {BsTypeBold, BsTypeItalic, BsTypeUnderline} from 'react-icons/bs'

import './index.css'

class TextEditor extends Component {
  state = {isBoald: false, isItalic: false, isUnderLine: false}

  onChangeBoldActivity = () => {
    this.setState(prevState => ({isBoald: !prevState.isBoald}))
  }

  onChangeItalicActivity = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onChangeUnderLineActivity = () => {
    this.setState(prevState => ({isUnderLine: !prevState.isUnderLine}))
  }

  renderTextEditor = () => {
    const {isBoald, isItalic, isUnderLine} = this.state
    const activeBoldIcon = isBoald
      ? 'icon-style active-icon-color'
      : 'icon-style'
    const activeItalicIcon = isItalic
      ? 'icon-style active-icon-color'
      : 'icon-style'
    const activeUnderLineItalic = isUnderLine
      ? 'icon-style active-icon-color'
      : 'icon-style'
    const boldText = isBoald ? 'bold-text' : ''
    const italicText = isItalic ? 'italic-text' : ''
    const underLineText = isUnderLine ? 'underLine-text' : ''

    return (
      <div className="main-cont">
        <div className="card-cont">
          <div className="text-editor-image-cont">
            <h1 className="text-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="text-editor-image"
            />
          </div>
          <div className="input-cont">
            <ul className="icon-cont">
              <li key="1">
                <button
                  onClick={this.onChangeBoldActivity}
                  type="button"
                  className="btn-style"
                  data-testid="bold"
                >
                  <BsTypeBold className={activeBoldIcon} />
                </button>
              </li>
              <li key="2">
                <button
                  onClick={this.onChangeItalicActivity}
                  type="button"
                  className="btn-style"
                  data-testid="italic"
                >
                  <BsTypeItalic className={activeItalicIcon} />
                </button>
              </li>
              <li key="3">
                <button
                  onClick={this.onChangeUnderLineActivity}
                  type="button"
                  className="btn-style"
                  data-testid="underline"
                >
                  <BsTypeUnderline className={activeUnderLineItalic} />
                </button>
              </li>
            </ul>
            <textarea
              className={`text-area-look ${boldText} ${italicText} ${underLineText}`}
              rows="4"
              cols="50"
            >
              hello world!
            </textarea>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.renderTextEditor()
  }
}

export default TextEditor
