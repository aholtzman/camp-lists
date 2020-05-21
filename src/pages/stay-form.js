import React from 'react'
import Layout from '../components/layout'

export default () => (
  <Layout>
  <div style={{ margin: 'auto', textAlign: 'center', padding: '2rem'}}>
    <a
      style={{padding: '1rem 4rem', background: 'white', margin:'auto', textDecoration:'none', color:'black', textTransfrom: 'uppercase', borderRadius: '50px', border: '3px solid rgba(0,0,20,.9)', fontWeight: 700}}
      href='https://docs.google.com/spreadsheets/d/1_v5qUbPOopetrlhZxlSy9erpMK8u5Ts_Ijhx_6jCGPQ/edit?usp=sharing'
      target='_blank'
      rel="noopener noreferrer"
    >EDIT EXISTING STAY</a>
  </div>
      <div>
      <iframe style={{margin:'auto', width:'100%'}}  src="https://docs.google.com/forms/d/e/1FAIpQLSfxS8wedmycTF0opVzLgacqvGWy_9wobaKozA-M461cQKV-0g/viewform?embedded=true" width="640" height="1500" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  </Layout>
)
