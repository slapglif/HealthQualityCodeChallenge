import React from 'react';
import styled from 'styled-components'

import {
  Button,
} from '@mui/material'

const InactiveGenderStyle = styled(Button)({
  textTransform: 'unset',
  borderColor: '#B2C1D9',
  color: '#384354',
  padding: '6px 12px',

  '&:hover': {
    backgroundColor: '#00E1C2',
  },
})

const ActiveGenderStyle = styled(Button)({
  textTransform: 'unset',
  color: '#384354',
  backgroundColor: '#00BFA5',
  padding: '6px 12px',
  border: '1px solid #00BFA5',

  '&:hover': {
    backgroundColor: '#00E1C2',
  },
})

const GenderOption = ({ value, onChange, name, label }) => {
  if (value === name) {
    return (
      <ActiveGenderStyle onClick={() => onChange(name)}>
        {label}
      </ActiveGenderStyle>
    )
  }

  return (
    <InactiveGenderStyle variant="outlined" onClick={() => onChange(name)}>
      {label}
    </InactiveGenderStyle>
  )
}

export default GenderOption;