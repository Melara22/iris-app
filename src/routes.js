import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Login from './Paginas/Login';
import Dashboard from './Paginas/Dashboard/Dashboard';
import Dashboard2 from './Paginas/Dashboardagregar/Dashboard2';
import Dashboard_Post from './Paginas/Dashboard_Post/Dashboard_Post';
import Dashboard_Columns from './Paginas/Dashboard_Columns/Dashboard_Columns';
import Dashboard_card from './Paginas/Dashboard_Cards/Dashboard_card';
import DashboardPost from './Paginas/DashboardPost/PostColumn';
import DashboardBuscar from './Paginas/DashboardBuscar/Dashboardbuscar';
import DashboardPost2 from './Paginas/DashboardPost2/DashboardPost2';
import Private from './Paginas/Dashboard-private/private';
export const MY_ROUTE = '/Dashboard_card/:slug';

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Dashboard" component={Dashboard}/>
      {/*<Route path="/dashboard/:slug" render={(match) => {
        return(
          <Dashboard {...match} />
        );
      }}/>*/}
      <Route path="/dashboardagregar" component={dashboard2}/>
      <Route path="/dashboard_Post" component={dashboard_post}/>
      <Route path="/dashboard_card" component={dashboard_card}/>


      <Route exact strict path="/dashboard_columns/:slug" render={(match) => {
        return(
          <Dashboard_Columns {...match} />
        );
      }}/>
      <Route path="/dashboardBuscar" component={dashboardbuscar}/>
      <Route path="/dashboardPost2" component={dashboardpost2}/>
        <Route path="/Dashboard-private" component={privateD}/>
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

const dashboard_post = () => (
  <div>
    <Dashboard_Post />
  </div>
)
const dashboard_columns = () => (
  <div>
    <Dashboard_Columns />
  </div>
)
const dashboard_card = () => (
  <div>
    <Dashboard_card />
  </div>
)

const privateD = () => (
  <div>
    <Private />
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