import React from 'react' // var react = require('react)
import { Layout } from 'antd'
import styled from 'styled-components'
const { Header } = Layout

const HeaderText = styled.h1`
  display: flex;
  justify-content: center;
  color: white;
`

const StyledHeader = styled(Header)`
  background: #3b47da !important;
`

class AppHeader extends React.Component {
  state = {}
  render() {
    return (
      <StyledHeader>
        <HeaderText className="banner">Taxi Voter </HeaderText>
      </StyledHeader>
    )
  }
}

export default AppHeader
