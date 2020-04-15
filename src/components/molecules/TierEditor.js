import React from 'react'
import styled from '@emotion/styled'
import TextInputField from '../atoms/TextInputField'
import Layout from '../../constants/layoutConstants'
import AddRune from '../atoms/AddRune'
import OutlinedButton from '../atoms/OutlinedButton'

const S = {}
S.TierEditor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 24px 0;
`

function TierEditor({ color, setTitle, setName, setTooltip, setDetails, tier, tierId, onAdd }) {
  var label = ''
  switch (tierId) {
    case 0:
      label = '1st'
      break
    case 1:
      label = '2nd'
      break
    default:
      label = '3rd'
  }
  return (
    <S.TierEditor>
      <TextInputField
        color={color}
        placeholder="Tier Title ex: 'Heriosm'"
        onChange={(input) => setTitle(tierId, input)}
        value={tier && tier.title}
        maxLength={Layout.EDITOR_FIELD_SHORT}
        label={'Define your ' + label + ' tier of runes'}
      />
      {tier.runes.map((_, runeId) => (
        <div key={'tier' + tierId + 'rune' + runeId}>
          <TextInputField
            color={color}
            placeholder="Rune Name ex: 'Overheal'"
            onChange={(input) => setName(tierId, runeId, input)}
            value={tier.runes[runeId] && tier.runes[runeId].name}
            maxLength={Layout.EDITOR_FIELD_SHORT}
            label={'Rune ' + (runeId + 1)}
            key={'tier' + tierId + 'rune' + runeId + 'name'}
          />
          <TextInputField
            color={color}
            placeholder="Rune Short Tooltip ex: 'Excess healing on you becomes a shield.'"
            onChange={(input) => setTooltip(tierId, runeId, input)}
            value={tier.runes[runeId] && tier.runes[runeId].tooltip}
            maxLength={Layout.EDITOR_FIELD_MID}
            optional
            key={'tier' + tierId + 'rune' + runeId + 'tooltip'}
          />
          <TextInputField
            color={color}
            placeholder="Rune Detailed Tooltip ex: 'Takedowns restore 12% of your missing health...'"
            onChange={(input) => setDetails(tierId, runeId, input)}
            value={tier.runes[runeId] && tier.runes[runeId].detail}
            maxLength={Layout.EDITOR_FIELD_LONG}
            key={'tier' + tierId + 'rune' + runeId + 'detail'}
          />

          <OutlinedButton color={color} label="Upload Artwork" onClick={() => console.log('upload')} />
        </div>
      ))}
      <AddRune onAdd={onAdd} color={color} />
    </S.TierEditor>
  )
}

export default TierEditor
