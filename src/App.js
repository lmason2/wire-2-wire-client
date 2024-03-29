import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import About from "./components/About/About";
import LHome from "./components/LHome/LHome";
import THome from "./components/Team/THome/THome";
import Profile from "./components/Profile/Profile";
import AllUsers from "./components/Friends/AllUsers";
import FriendProfile from "./components/Friends/FriendProfile";
import UserDash from "./components/Admin/UserDash";
import EditProfile from "./components/Admin/EditProfile";
import ContactUs from "./components/Contact/ContactUs";

const App = () => {
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/about" exact component={About} />
                    <Route path="/log" exact component={LHome} />
                    <Route path="/teams" exact component={THome} />
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/allUsers" exact component={AllUsers} />
                    <Route path="/friend-profile" exact component={FriendProfile} />
                    <Route path="/admin" exact component={UserDash} />
                    <Route path="/edit-profile" exact component={EditProfile} />
                    <Route path="/contact-us" exact component={ContactUs} />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;