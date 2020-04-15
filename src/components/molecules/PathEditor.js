import React from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'
import OutlinedButton from '../atoms/OutlinedButton'
import FilledButton from '../atoms/FilledButton'
import TextInputField from '../atoms/TextInputField'

const S = {}
S.PathEditor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 24px 0;

  .splitCol {
    align-self: stretch;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`

S.ColorPicker = styled.div`
  position: fixed;
  z-index: 2000;
  margin-top: -16px;
  margin-left: -16px;

  .cover {
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }
`

function PathEditor({ color, setTitle, setSubtitle, path, setColor, colorPickerOpen, toggleColorPicker }) {
  return (
    <S.PathEditor>
      <TextInputField
        color={color}
        placeholder="Path Title ex: Precision"
        onChange={(input) => setTitle(input)}
        label="Define Your Path"
        value={path && path.title}
        maxLength={5}
      />
      <TextInputField
        color={color}
        placeholder="Path Subtitle ex: Become a legend"
        onChange={(input) => setSubtitle(input)}
        value={path && path.subtitle}
        maxLength={5}
      />
      <div className="splitCol">
        <div>
          <FilledButton bg={color} color={'white'} id="xxx" label="Path Color" onClick={toggleColorPicker} />
          {colorPickerOpen ? (
            <S.ColorPicker>
              <div className="cover" onClick={toggleColorPicker} />
              <ChromePicker onChange={(e) => setColor(e.hex)} disableAlpha={true} color={color} />
            </S.ColorPicker>
          ) : null}
        </div>
        <OutlinedButton color={color} label="Path Icon" onClick={() => console.log('upload')} />
      </div>
      <div className="splitCol">
        <OutlinedButton color={color} label="Background Image" onClick={() => console.log('upload')} />
        <OutlinedButton color={color} label="Emblem" onClick={() => console.log('upload')} />
      </div>
    </S.PathEditor>
  )
}

export default PathEditor
