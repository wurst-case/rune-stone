import React from 'react'
import styled from '@emotion/styled'
import { ChromePicker } from 'react-color'
import Layout from '../../constants/layoutConstants'
import FileInput from '../atoms/FileInput'
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

function PathEditor({ color, setTitle, setSubtitle, path, setColor, colorPickerOpen, toggleColorPicker, selectImage }) {
  return (
    <S.PathEditor>
      <TextInputField
        color={color}
        placeholder="Path Title ex: Precision"
        onChange={(input) => setTitle(input)}
        label="Define Your Path"
        value={path && path.title}
        maxLength={Layout.EDITOR_FIELD_SHORT}
      />
      <TextInputField
        color={color}
        placeholder="Path Subtitle ex: Become a legend"
        onChange={(input) => setSubtitle(input)}
        value={path && path.subtitle}
        maxLength={Layout.EDITOR_FIELD_MID}
        big
      />
      <div className="splitCol">
        <div>
          <FilledButton bg={color} color={'white'} id="xxx" label="Path Color" onClick={toggleColorPicker} />
          {colorPickerOpen ? (
            <S.ColorPicker>
              <div className="cover" onClick={toggleColorPicker} />
              <ChromePicker
                onChange={(e) => {
                  // console.log(e.hex, e.rgb.r + ',' + e.rgb.g + ',' + e.rgb.b)
                  setColor(e.hex, e.rgb.r + ',' + e.rgb.g + ',' + e.rgb.b)
                }}
                disableAlpha={true}
                color={color}
              />
            </S.ColorPicker>
          ) : null}
        </div>
        <FileInput color={color} onChange={(e) => selectImage(e.target.files[0], 6)} label="Path Icon" />
      </div>
      <div className="splitCol">
        <FileInput color={color} onChange={(e) => selectImage(e.target.files[0], 4)} label="Background Image" />
        <FileInput color={color} onChange={(e) => selectImage(e.target.files[0], 5)} label="Emblem" />
      </div>
    </S.PathEditor>
  )
}

export default PathEditor
