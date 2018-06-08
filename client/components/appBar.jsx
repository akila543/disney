import React, {Component} from 'react';

//importing Material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export default class AppBarComponent extends Component
{
  render()
  {
    return(
      <div>
        <AppBar position="static" style={{backgroundColor:this.props.color}}>
          <Toolbar style={{flex:1}}>
            <Typography variant="title" color="inherit" >
              {this.props.title}
            </Typography>
            <Button color="inherit" style={{position:'absolute',right: 15}}>Login</Button>
          </Toolbar>
      </AppBar>
    </div>
    );
  }
}
