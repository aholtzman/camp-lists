import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/private-route'
import Home from './pages/home'
import Form from './pages/form'
import Opening from './pages/opening'
import Maintenance from './pages/maintenance'
import Cleaning from './pages/cleaning'
import Projects from './pages/projects'
import Closing from './pages/closing'
import MessageForm from './pages/add-message'
import StayForm from './pages/stay-form'
import Stay from './pages/stay'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/opening" component={Opening} />
        <PrivateRoute path="/form" component={Form} />
        <PrivateRoute path="/maintenance" component={Maintenance} />
        <PrivateRoute path="/cleaning" component={Cleaning} />
        <PrivateRoute path="/closing" component={Closing} />
        <PrivateRoute path="/projects" component={Projects} />
        <PrivateRoute path="/add-message" component={MessageForm} />
        <PrivateRoute path="/stay-form" component={StayForm} />
        <PrivateRoute path="/stay" component={Stay} />
      </Switch>
    </Router>
  );
}

export default App;
