import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './Paginas/Login';
import Dashboard from './Paginas/Dashboard/Dashboard';
import Dashboard2 from './Paginas/Dashboardagregar/Dashboard2';
import DashboardPost from './Paginas/DashboardPost/PostColumn';
import DashboardBuscar from './Paginas/DashboardBuscar/Dashboardbuscar';
import DashboardPost2 from './Paginas/DashboardPost2/DashboardPost2';


const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/dashboard" component={dashboard}/>
      <Route path="/dashboardagregar" component={dashboard2}/>
      <Route path="/dashboardPost" component={dashboardpost}/>
      <Route path="/dashboardBuscar" component={dashboardbuscar}/>
      <Route path="/dashboardPost2" component={dashboardpost2}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
)

const Home = () => (
 	<Login />
)

const dashboard = () => (
  <div>
    <Dashboard />
  </div>
)

const dashboard2 = () => (
  <div>
    <Dashboard2 />
  </div>
)

const dashboardpost = () => (
  <div>
    <DashboardPost />
  </div>  
)

const dashboardbuscar = () => (
  <div>
    <DashboardBuscar />
  </div>  
)

const dashboardpost2 = () => (
  <div>
    <DashboardPost2 />
  </div>  
)


const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default BasicExample