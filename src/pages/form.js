import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
  <div style={{ margin: 'auto', textAlign: 'center', padding: '2rem'}}>
    <a
      style={{padding: '1rem 4rem', background: 'white', margin:'auto', textDecoration:'none', color:'black', textTransfrom: 'uppercase', borderRadius: '50px', border: '3px solid rgba(0,0,20,.9)', fontWeight: 700}}
      href='https://docs.google.com/spreadsheets/d/1dWTa9Ks_CXR1koXVTP0MYCZ44_SiwgDftUve2hj2Ho4/edit?usp=sharing'
      target='_blank'
      rel="noopener noreferrer"
    >EDIT EXISTING TASKS</a>
  </div>
    <div>
      <iframe style={{margin:'auto', width:'100%'}} title="add task form" src="https://docs.google.com/forms/d/e/1FAIpQLSda1aBDgsMVs09uGVeLZMXtMB3B_kEzFx07ooMrOCbSTn-MHA/viewform?embedded=true" width="640" height="1500" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
    </div>
  </Layout>
)
