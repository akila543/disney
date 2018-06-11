import React, {Component} from 'react';

//importing Material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

module.exports = (props) => (
  <div>
    <AppBar position="static" style={{backgroundColor:props.color}}>
      <Toolbar style={{flex:1}}>
        <Typography variant="title" color="inherit" >
          {props.title}
        </Typography>
      </Toolbar>
  </AppBar>
</div>
);
