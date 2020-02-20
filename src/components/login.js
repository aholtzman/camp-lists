import React, { Component } from "react"
import styled from 'styled-components'
import { handleLogin } from "../services/auth"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  background-color: rgba(255,255,255,.95);
  padding: 4rem;
  margin-top:10%;
  border-radius: 20px;
  box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
  0 6.7px 5.3px rgba(0, 0, 0, 0.028),
  0 12.5px 10px rgba(0, 0, 0, 0.035),
  0 22.3px 17.9px rgba(0, 0, 0, 0.042),
  0 41.8px 33.4px rgba(0, 0, 0, 0.05),
  0 100px 80px rgba(0, 0, 0, 0.07);
`

class Login extends Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
    window.location.reload()
  }

  render() {
    return (
      <>
        <Form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
          }}
        >
          <label>
            Username
          </label>
          <Input type="text" name="username" onChange={this.handleUpdate} />
          <label>
            Password
          </label>
          <Input
            type="password"
            name="password"
            onChange={this.handleUpdate}
          />
          <br />
          <Submit type="submit" value="Log In" />
        </Form>
      </>
    )
  }
}

export default Login

const Input = styled.input`
  padding: 1rem;
  margin: .5rem 0;
  font-size: 16px;
`

const Submit = styled.input`
  background-color: rgba(0,0,20,.9);
  color: #fff;
  padding: 1rem 2rem;
  text-transform: uppercase;
  font-size: 20px;
  width: 60%;
  letter-spacing: 1.5px;
  align-self: center;
  border: 1px solid #fff;
`

export const Success = () => (
  <Form><h1 style={{textAlign: `center`}}>Success. You are logged in.</h1></Form>
)
