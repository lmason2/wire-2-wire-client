import React, { useState, useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";

import { getPosts } from "../../actions/posts";
import { getUsers } from "../../actions/users";
import Posts from "../Posts/Posts";
import Friends from "../Friends/Friends";

export const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const users = useSelector((state) => state.users);


    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
   
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const friends = [];
    user?.result.public.friends.forEach(friend => {
        users.forEach(totalUser => {
            if (friend === totalUser._id) {
                friends.push(totalUser);
            }
        })
    })

    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} currentId={currentId}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Friends friends={friends} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;