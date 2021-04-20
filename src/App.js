import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {useDispatch} from "react-redux";
import { getUsers } from "./actions/users";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import About from "./components/About/About";
import LHome from "./components/Log/LHome/LHome";
import THome from "./components/Team/THome/THome";
import Profile from "./components/Profile/Profile";
import AllUsers from "./components/Friends/AllUsers";

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
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App;