import React from 'react';
import './App.css';
import Navbar from './presentational-component/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './presentational-component/Home'
import ViewRequests from './presentational-component/admin/ViewRequests';
import CreateNewFlight from './presentational-component/admin/CreateNewFlight';
import Offers from './presentational-component/admin/Offers';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path = "/home" component={Home}/>
      <Route path="/view-request" component={ViewRequests}/>
      <Route path="/create-new-flight" component={CreateNewFlight}/>
      <Route path="/offers" component={Offers}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
