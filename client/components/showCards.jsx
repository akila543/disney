import React,{ Component } from 'react';

//importing Material ui components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

module.exports = (props) => (
  <div>
    <div
        onDragStart = {(e) => props.dragStartEvent(e, props.data.name)}
        draggable
        style={props.draggableStyle}>
          <Card style={props.cardStyle}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h1" style={props.titleStyle}>
              {props.data.name}
            </Typography>
            <Typography component="p" style={{color:'#0ebaa6'}}>
              Duration {props.data.time}
            </Typography>
          </CardContent>
        </Card>
    </div>
  </div>
);
