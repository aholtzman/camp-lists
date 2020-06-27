import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Tabletop from 'tabletop'
import Layout from '../components/layout'

export default () => {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1_v5qUbPOopetrlhZxlSy9erpMK8u5Ts_Ijhx_6jCGPQ/edit?usp=sharing',
      callback: googleData => { setData(googleData) },
      simpleSheet: true
    })
  }, [])

  const sortedDates = data && data.sort((a,b) => {
    const first = new Date(a["Arrival"])
    const second = new Date(b['Arrival'])

    return first - second
  })

  const now = new Date()

  const upcomming = data && sortedDates.filter((stay) => {
    const date = new Date(stay['Departure']);
    return (date >= now);
  });

  const past = data && sortedDates.filter((stay) => {
    const date = new Date(stay['Departure']);
    return (date < now);
  })

  return (
    <Layout page='Stay' >
    <List>
      <BtnWrap>
        <Link to="/stay-form"
        style={{textAlign: 'center', margin: '.5rem', padding: '1rem 4rem', background: 'white', textDecoration:'none', color:'black', borderRadius: '50px', border: '3px solid rgba(0,0,20,.9)', fontWeight: 700}}
        >Book a stay</Link>
        <a
          style={{textAlign: 'center', margin: '.5rem', padding: '1rem 4rem', background: 'white', textDecoration:'none', color:'black', borderRadius: '50px', border: '3px solid rgba(0,0,20,.9)', fontWeight: 700}}
          href='https://docs.google.com/spreadsheets/d/1_v5qUbPOopetrlhZxlSy9erpMK8u5Ts_Ijhx_6jCGPQ/edit?usp=sharing'
          target='_blank'
          rel="noopener noreferrer"
        >Edit List</a>
      </BtnWrap>
      <h1 style={{textAlign:'center'}}>Upcoming Stays</h1>
      <Blocks>
        <Wrap style={{padding: '1rem'}}>
          <p style={{flex: 3, textAlign: "left"}}><strong>Name</strong></p>
          <p><strong>From</strong></p>
          <p><strong>To</strong></p>
        </Wrap>
        <hr />
        {
          data && upcomming.map((stay, index) => {
            return (
              <div key={index} style={{padding: '1rem'}}>
                <Wrap>
                  <p style={{flex: 3, textAlign: "left"}}>{stay["Name"]}</p>
                  <p>{stay["Arrival"]}</p>
                  <p>{stay["Departure"]}</p>
                </Wrap>
                {stay["Details (optional)"] && <p>Details: {stay["Details (optional)"]}</p>}
              </div>
          )
          })
        }
      </Blocks>
      <Blocks>
      <h2 style={{textAlign: 'center'}}>Past Stays</h2>
      {
        data && past.map((stay, index) => {
          return (
            <div key={index} style={{padding: '1rem'}}>
              <Wrap>
                <p style={{flex: 3, textAlign: "left"}}><strong>{stay["Name"]}</strong></p>
                <p>{stay["Arrival"]}</p>
                <p>{stay["Departure"]}</p>
              </Wrap>
              {stay["Details (optional)"] && <p style={{margin: 0, marginTop: 10, fontSize: 14}}>Details: {stay["Details (optional)"]}</p>}
            </div>
        )
        })
      }
      </Blocks>
    </List>
    </Layout>
)}

const List = styled.div`
  max-width: 1000px;
  background-color: white;
  margin: 2rem auto;
  padding: 4rem;
  font-size: 20px;
  border-radius: 20px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07);

  @media(max-width: 768px) {
    width: calc(100% -2rem);
    padding:1rem;
    margin: 1rem;
  }

  @media print {
    box-shadow: 0 0 0 transparent;
  }
`

const Blocks = styled.div`
  div:nth-child(odd) {
    color: rgba(0,0,20,.9);
    border: 1px solid rgba(0,0,20,.9);
    border-radius: 10px;
  }
  div:nth-child(even) {
    background-color: rgba(0,0,20,.9);
    border-radius: 10px;
    color: white;
    margin: 5px 0;
    border: 1px solid rgba(0,0,20,.9);
  }
`

const Btn = styled.p`
  padding: 1rem;
  margin: 2rem auto;
  background:white;
  width: 100px;

  @media print {
    display:none;
  }
`

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column
  }
`

const Wrap = styled.section`
  display: flex;
  justify-content: space-around;
  text-align: center;

  p {
    flex: 1;
    margin: 0;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    text-align: left;
  }
`
