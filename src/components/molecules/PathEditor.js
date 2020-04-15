import React from 'react'
import styled from '@emotion/styled'
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

function PathEditor({ color, setTitle, setSubtitle, path }) {
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
        <FilledButton bg={color} color={'white'} label="Path Color" onClick={() => console.log('upload')} />
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
