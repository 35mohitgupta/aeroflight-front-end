import React from 'react';
import './App.css';
import Navbar from './presentational-component/Navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './presentational-component/Home'
import ViewRequests from './presentational-component/admin/ViewRequests';
import CreateNewFlight from './presentational-component/admin/CreateNewFlight';
import Offers from './presentational-component/admin/Offers';
import ViewBookings from './presentational-component/user/ViewBookings';
import BookAFlight from './presentational-component/user/BookAFlight';
import BookingFinal from './presentational-component/user/BookingFinal';
import AdminDashboard from './presentational-component/admin/AdminDashboard';
import UserDashboard from './presentational-component/user/UserDashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="container-fluid App">
      <Navbar/>
      <Route exact path="/" component={Home}/>
      <Route path = "/home" component={Home}/>
      <Route path="/view-requests" component={ViewRequests}/>
      <Route path="/create-new-flight" component={CreateNewFlight}/>
      <Route path="/offers" component={Offers}/>
      <Route path="/view-bookings" component={ViewBookings}/>
      <Route path="/book-flight" component={BookAFlight}/>
      <Route path="/final-book/:flightNo"component={BookingFinal}/>
      <Route path="/admin" component={AdminDashboard}/>
      <Route path="/user" component={UserDashboard}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
