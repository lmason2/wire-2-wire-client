import React, { useState, useEffect } from "react";
import  { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import MinimizeIcon from '@material-ui/icons/Minimize';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts"

const Form = ({ currentId, setCurrentId, editPost, setToggleEdit }) => {
    const [currentAdd, setCurrentAdd] = useState(false);
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));
  
    useEffect(() => {
      if (post) setPostData(post);
    }, [post]);
  
    const clear = () => {
      setCurrentId(0);
      setPostData({ title: '', message: '', tags: '', selectedFile: '' });
      setCurrentAdd((prevCurrentAdd) => !prevCurrentAdd);
    };

    const cancel = () => {
      setToggleEdit(false);
    };

    const addPost = () => {
      setCurrentAdd((prevCurrentAdd) => !prevCurrentAdd); 
    }
    const deletePost = () => {
      dispatch(deletePost(post._id));
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (currentId === 0) {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
        clear();
      } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        clear();
      }
    };
  
    if (!user?.result?.firstName) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please sign in to see your friends.
          </Typography>
        </Paper>
      );
    }

    if (editPost) {
      return (
        <Paper className={classes.paper}>
            <Button variant="outlined" color="secondary" onClick={cancel} size="small">
                <MinimizeIcon />
            </Button>
            <form autoComplete="off" noValidate className={ `${classes.root} ${classes.form}` } onSubmit={handleSubmit}>
                <Typography variant="h6">Editing a Post</Typography>
                <TextField 
                    name="title" 
                    vairant="outlined" 
                    label="Title" 
                    fullWidth
                    value={postData.title}
                    onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                />
                <TextField 
                    name="message" 
                    vairant="outlined" 
                    label="Message" 
                    fullWidth
                    value={postData.message}
                    onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                />
                <TextField 
                    name="tags" 
                    vairant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="false"
                        multiple={false}
                        onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div> 
                <Button className={classes.buttonSubmit} variant = "contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant = "contained" color="secondary" size="large" onClick={deletePost} fullWidth><DeleteIcon />&nbsp;Delete</Button>
            </form>
        </Paper>
      )
    }
    
    if (currentAdd) {
      return (
        <Paper className={classes.paper}>
          <Button variant="outlined" color="secondary" onClick={clear} size="small">
              <MinimizeIcon />
          </Button>
              <form autoComplete="off" noValidate className={ `${classes.root} ${classes.form}` } onSubmit={handleSubmit}>
                  <Typography variant="h6">{currentId ? "Editing" : "Creating"} a Post</Typography>
                  <TextField 
                      name="title" 
                      vairant="outlined" 
                      label="Title" 
                      fullWidth
                      value={postData.title}
                      onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                  />
                  <TextField 
                      name="message" 
                      vairant="outlined" 
                      label="Message" 
                      fullWidth
                      value={postData.message}
                      onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                  />
                  <TextField 
                      name="tags" 
                      vairant="outlined" 
                      label="Tags" 
                      fullWidth
                      value={postData.tags}
                      onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}
                  />
                  <div className={classes.fileInput}>
                      <FileBase 
                          type="false"
                          multiple={false}
                          onDone={({base64}) => setPostData({ ...postData, selectedFile: base64 })}
                      />
                  </div> 
                  <Button className={classes.buttonSubmit} variant = "contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
              </form>
          </Paper>
      );
    }
    return (
        <Fab color="primary" aria-label="add" onClick={addPost}>
            <AddIcon />
        </Fab>
    );
}

export default Form;