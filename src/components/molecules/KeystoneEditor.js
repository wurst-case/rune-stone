import React from 'react'
import styled from '@emotion/styled'
import TextInputField from '../atoms/TextInputField'
import Layout from '../../constants/layoutConstants'
import AddRune from '../atoms/AddRune'
import OutlinedButton from '../atoms/OutlinedButton'

const S = {}
S.KeystoneEditor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 24px 0;
`

function KeystoneEditor({ color, setName, setTooltip, setDetails, keystones, onAdd }) {
  return (
    <S.KeystoneEditor>
      {keystones.map((_, id) => (
        <div key={'keystone' + id}>
          <TextInputField
            color={color}
            placeholder="Keystone Name ex: Press the Attack"
            onChange={(input) => setName(id, input)}
            value={keystones[id].name}
            maxLength={Layout.EDITOR_FIELD_SHORT}
            label={'Keystone ' + (id + 1)}
          />
          <TextInputField
            color={color}
            placeholder="Keystone Simple Tooltop ex: 'Hitting an enemy champion 3 consecutive..'"
            onChange={(input) => setTooltip(id, input)}
            value={keystones[id] && keystones[id].tooltip}
            maxLength={Layout.EDITOR_FIELD_MID}
          />
          <TextInputField
            color={color}
            placeholder="Keystone Detailed Tooltop ex: 'Hitting an enemy champion 3 consecutive..'"
            onChange={(input) => setDetails(id, input)}
            value={keystones[id] && keystones[id].detail}
            maxLength={Layout.EDITOR_FIELD_LONG}
          />
          <OutlinedButton color={color} label="Upload Artwork" onClick={() => console.log('upload')} />
        </div>
      ))}
      <AddRune onAdd={onAdd} keystone color={color} />
    </S.KeystoneEditor>
  )
}

export default KeystoneEditor
