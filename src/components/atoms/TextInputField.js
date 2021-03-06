import React from 'react'
import styled from '@emotion/styled'

const S = {}
S.TextInputField = styled.input`
  min-height: 50px;
  min-width: 400px;
  font-size: 1rem;
  padding: 8px;
  box-sizing: border-box;

  background: transparent;
  color: white;

  border: 1px solid ${(props) => props.color}; 
  /* rgba(${(props) => props.color}); */
  border-radius: 4px;

  &:focus{
    outline-color: ${(props) => props.color};
    outline-width: 6px;
  } 

  @media only screen and (max-width: 500px) {
    min-width: 100%;
  }
`

S.TextArea = styled.textarea`
  min-height: 50px;
  min-width: 400px;
  font-size: 1rem;
  padding: 8px;
  box-sizing: border-box;

  background: transparent;
  color: white;

  border: 1px solid ${(props) => props.color}; 
  /* rgba(${(props) => props.color}); */
  border-radius: 4px;

  &:focus{
    outline-color: ${(props) => props.color};
    outline-width: 6px;
  } 

  @media only screen and (max-width: 500px) {
    min-width: 100%;
  }
`

function TextInputField({ color, placeholder, value, label, onChange, maxLength, optional, big }) {
  return big ? (
    <>
      <h4>{label}</h4>
      <S.TextArea
        color={color}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        required={!optional}
        rows={4}
        value={value}
      />
    </>
  ) : (
    <>
      <h4>{label}</h4>
      <S.TextInputField
        type="text"
        color={color}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
        required={!optional}
      />
    </>
  )
}

export default TextInputField
