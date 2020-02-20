import React from 'react'
import styled from 'styled-components'
import Header from './header'
import BG from '../assets/bg.jpg'

export default ({ children, page }) => (
  <Wrap>
    <Header page={page} />
    <main style={{minHeight: 'calc(100vh - 14rem)', margin:'auto'}}>{children}</main>
  </Wrap>
)

const Wrap = styled.div`
  background-image:url(${BG});
  background-size:cover;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: scroll;
`
