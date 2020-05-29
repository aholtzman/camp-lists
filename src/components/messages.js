import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Tabletop from 'tabletop'
import { logout } from "../services/auth"

export default () => {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1YQxX3FEtjNo5UtPKF2FUT9BiYrpOuV8kHTcY2ZhLMe4/edit?usp=sharing',
      callback: googleData => { setData(googleData.reverse()) },
      simpleSheet: true
    })
  }, [])

  return (
    <Wrap>
      <BtnWrap>
        <button onClick={logout} style={{padding: '1rem', margin:'1rem', border: '1px solid white', fontSize: '16px', background: 'darkred', color: 'white' }}>log out</button>
        <a
          style={{textAlign: 'center', padding: '1rem', background: 'white', margin:'1rem', textDecoration:'none', color:'black'}}
          href='https://docs.google.com/spreadsheets/d/1YQxX3FEtjNo5UtPKF2FUT9BiYrpOuV8kHTcY2ZhLMe4/edit?usp=sharing'
          target='_blank'
          rel="noopener noreferrer"
        >edit messages</a>
        <Link style={{textAlign: 'center', padding: '1rem', background: 'white', margin:'1rem', textDecoration:'none', color:'black'}} to="/add-message">add message</Link>
      </BtnWrap>
      <List>
      {
        data ? data.map((message, index) => {
          return  <Card key={index}>
                    <p>{message['Post']}</p>
                    <hr />
                    <p style={{fontSize: `12px`}}>Submitted by {message['Name']} on {message['Timestamp']}</p>
                  </Card>
                }) : ''
      }
      </List>
    </Wrap>
)}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  @media(max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const List = styled.div`
  max-width: 600px;
  font-size: 20px;
  margin:auto;

  hr {
    border-color: rgba(0,0,20,.9);
  }

  @media(max-width: 768px) {
    width: calc(100% -2rem);
    padding:1rem;
    margin: 1rem;
  }
`

const BtnWrap = styled.div`
  text-align: right;
  max-width: 600px;
  margin: 2rem auto;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const Card = styled.div`
  margin: 1rem auto;
  padding: 2rem;
  line-height: 1.4;
  background-color:white;
  border-radius: 20px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07);
`
