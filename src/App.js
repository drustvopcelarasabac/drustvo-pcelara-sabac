import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Navigation from './Components/Navigation/Navigation'
import Home from './Components/Home/Home'
import Gallery from './Components/Gallery/Gallery'
import News from './Components/News/News'
import Members from './Components/Members/Members'
import ContactUs from './Components/ContactUs/ContactUs'
import AboutUs from './Components/AboutUs/AboutUs'
import LogIn from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import NotFound from './Components/NotFound/NotFound'

function App() {
  return (
    <Router>
      <Header/>
      <Navigation/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/news" component={News} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/registration" component={Registration} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
