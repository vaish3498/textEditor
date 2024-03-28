import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {Button, ItalicButton, UnderlineButton, TextAreaElement} from './style'

class TextEditor extends Component {
  state = {
    textBold: false,
    textItalic: false,
    textUnderLine: false,
  }

  boldText = () => {
    this.setState(prevState => ({textBold: !prevState.textBold}))
  }

  italicText = () => {
    this.setState(prevState => ({textItalic: !prevState.textItalic}))
  }

  underLineText = () => {
    this.setState(prevState => ({textUnderLine: !prevState.textUnderLine}))
  }

  render() {
    const {textBold, textItalic, textUnderLine} = this.state

    const color = textBold === false ? '#f1f5f9' : '#faff00'
    const italicButtonColor = textItalic === false ? '#f1f5f9 ' : '#faff00'
    const underLineButton = textUnderLine === false ? '#f1f5f9' : '#faff00'
    const fontWeight = textBold === false ? 'normal' : 'bold'
    const fontStyle = textItalic === false ? 'normal' : 'italic'
    const textDecoration = textUnderLine === false ? 'normal' : 'underline'

    return (
      <div className="background-container">
        <div className="central-container">
          <div className="image-container">
            <div>
              <h1 className="heading">Text Editor</h1>
              <div className="img-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  alt=" text editor"
                  className=" text-editor"
                />
              </div>
            </div>
            <div className="edit-container">
              <ul className="button-container">
                <li>
                  <Button
                    data-testid="bold"
                    color={color}
                    type="button"
                    onClick={this.boldText}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>
                <li>
                  <ItalicButton
                    data-testid="italic"
                    color={italicButtonColor}
                    type="button"
                    onClick={this.italicText}
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    data-testid="underline"
                    color={underLineButton}
                    type="button"
                    onClick={this.underLineText}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineButton>
                </li>
              </ul>
              <hr />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
