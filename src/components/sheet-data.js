import React, { useState, useEffect } from "react"
import styled from 'styled-components'
import Tabletop from 'tabletop'
import Layout from './layout'

export default ({ list = 'Opening' }) => {
  const [ data, setData ] = useState(null)

  useEffect(() => {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/1dWTa9Ks_CXR1koXVTP0MYCZ44_SiwgDftUve2hj2Ho4/edit?usp=sharing',
      callback: googleData => { setData(googleData) },
      simpleSheet: true
    })
  }, [])

  return (
    <Layout page={list} >
    <div style={{textAlign:'center'}}>
      <Btn onClick={() => window.print()}>Print</Btn>
    </div>
    <List>
    <h1 style={{textAlign:'center'}}>{list} List</h1>
    {
      data ? data.map((task, index) => {
        return task['Task type/group'] === list ?
        <div key={index}>
          <p title={`added by ${task['Your Name']} on ${task['Timestamp']}`}><Dot>&bull;</Dot><Box>&#x25a1;</Box> {task['Name of task']} - {task['Who should complete the task']}</p>
          {task['Message/Instructions'] !== '' ? <small style={{margin: '0 0 .75rem .75rem'}}>note: {task['Message/Instructions']}</small> : ''}
          <hr />
        </div>
        : ''
      }) : ''
    }
    </List>
    </Layout>
)}

const List = styled.div`
  max-width: 600px;
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

const Btn = styled.p`
  padding: 1rem;
  margin: 2rem auto;
  background:white;
  width: 100px;

  @media print {
    display:none;
  }
`

const Dot = styled.span`
  @media print {
    display: none;
  }
`

const Box = styled.span`
display: none;

@media print {
  display: inline-block;
}
`
