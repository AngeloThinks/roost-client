import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/HomePage/Home";
import About from "../components/AboutSection/About";
import Profile from "../components/ProfilePage/Profile";
import Footer from "../components/Footer/Footer";
import Form from "../components/SignupPage/Form";
import LoginForm from "../components/LoginPage/LoginForm";
// import Roster from "../components/RosterPage/Roster";
// import AddRoster from "../components/RosterForm/RosterForm";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        {/* <Route path="/Roster" component={Roster} /> */}
        <Route path="/Profile" component={Profile} />
        <Route path="/Form" component={Form} />
        <Route path="/LoginForm" component={LoginForm} />
        {/* <Route path='/add-roster' component={AddRoster}/> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
