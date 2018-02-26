import React, { Component } from 'react';
import './Dashboard.css';
import Modals from '../../Componentes/modals';
import Menu2 from '../../Componentes/menu2';

import imgstate from '../../Assets/Iconos/blank_state.png';
import{verifyDashboards} from '../../Assets/js/script.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: [1, 2, 3]});
    }, 2000);
  }

  render() {
    verifyDashboards();
    // console.log(this.props);
    return (
      this.state.loading.length <= 0 ? 'Loading' : (
        <div className="Dashboard">
          <section className="dash">
            <div className="container postainer">

              <div className="starter-template">
              <Menu2/>


              <div className="row agregar-dash">
                <div className="center-block state-div">
                  <img src={imgstate} alt="nostate"/>

                    <h2>no tienes dashboards por mostrar</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Aliquam interdum dolor neque, ut aliquet leo cursus at.
                      In laoreet mi sed nisl ullamcorper tempus. Suspendisse fermentum varius dictum. Nulla sed metus turpis.</p>

                    <a className="btn btn-primary btn-green"  data-toggle="modal" data-target="#myModal2">Crear nuevo</a>

                    <Modals />

                    <li>
                    <Link to="/dashboard/1">Dashboard #1</Link>
                    </li>
                </div>
              </div>
              </div>



            </div>
          </section>
        </div>
      )
    );
  }
}

export default Dashboard;