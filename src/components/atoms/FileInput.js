import React from 'react'
import styled from '@emotion/styled'

const S = {}
S.FileInput = styled.input`
  color: transparent;
  display: flex;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }

  &::before {
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    content: 'Choose Artwork';
    color: ${(props) => props.color};
    font-size: 1rem;
    font-family: 'Beaufort W01 Bold1339640';
    cursor: pointer;

    background-color: transparent;
    border: solid 2px ${(props) => props.color};
    border-radius: 4px;

    border-radius: 4px;
    min-height: 36px;
    min-width: 164px;
    padding: 8px;
    margin: 16px 16px;
    box-sizing: border-box;
  }

  &:hover::before {
    color: white;
    border-color: white;
    outline-color: ${(props) => props.color};
    outline-width: 6px;
  }

  &:active::before {
    color: white;
    background-color: ${(props) => props.color};
  }
`

function FileInput({ color, label, onChange }) {
  return (
    <>
      {label}:
      <S.FileInput color={color} onChange={onChange} type="file" />
    </>
  )
}

export default FileInput
