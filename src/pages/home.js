import React from 'react'
import Layout from '../components/layout'
import Login from '../components/login'
import Message from '../components/messages'
import { isLoggedIn } from "../services/auth"

export default () => (
  <Layout page={`Home`}>
    {
      isLoggedIn() ? <Message /> : <Login />
    }
  </Layout>
)
