import React, {Component} from 'react';

//importing Material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class AppBarComponent extends Component
{
  render()
  {
    return(
      <div>
        <AppBar position="static" style={{backgroundColor:this.props.color}}>
          <Toolbar>
            <Typography variant="title" color="inherit" >
              {this.props.title}
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
    );
  }
}
