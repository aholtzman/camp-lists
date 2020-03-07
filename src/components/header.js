import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default ({ page }) => {
  const screenWidth = window.innerWidth
  const [ show, setShow ] = useState(screenWidth <= 768 ? false : true)

  function toggleMenu() {
      setShow(!show)
  }

  return(
  <Header>
    <Image onClick={toggleMenu} src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-256.png" alt="mobile menu toggle" />
    <Nav style={{ display: show ? 'flex' : 'none' }}>
      <Menu>
        <A to="/" active={ page === 'Home' ? 'true' : 'false' } >Home</A>
        <A to="/opening" active={ page === 'Opening' ? 'true' : 'false'  } >Opening</A>
        <A to="/closing" active={ page === 'Closing' ? 'true' : 'false'  } >Closing</A>
        <A to="/maintenance" active={ page === 'Maintenance' ? 'true' : 'false'  } >Maintenance</A>
        <A to="/projects" active={ page === 'Project Ideas' ? 'true' : 'false'  } >Projects</A>
        <A to="/cleaning" active={ page === 'Cleaning' ? 'true' : 'false'  } >Cleaning List</A>
      </Menu>
      <P to="/form" active={'false'} >+ Add tasks</P>
    </Nav>
  </Header>
)}

const A = styled(Link)`
  text-decoration:none;
  color:white;
  font-size:20px;
  padding: 1rem;
  border-bottom: ${ props => props.active === 'true' ? '1px solid white' : ''};

  :hover {
    color: lightgrey;
  }
`

const Header = styled.header`
  padding: 3rem;
  background-color: rgba(0,0,20,.9);
  color:white;
  border-bottom: .5px solid white;

  @media print {
    display: none;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content:space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Menu = styled.div`
  margin: auto 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`

const P = styled(A)`
  background-color:white;
  border-radius: 50px;
  color:black;
  text-transform: uppercase;
  font-weight: 700;

  :hover {
    color: black;
    background-color: lightgrey;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`

const Image = styled.img`
  display: none;
  filter: invert(1);
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    display: block;
  }
`
