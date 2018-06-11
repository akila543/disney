import React from 'react';

//importing Material ui components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

module.exports = (props) => (
    <Card style={props.cardStyle}>
      <Typography gutterBottom variant="headline" component="h2" style={props.typoStyle}>
        {props.data}
      </Typography>
    </Card>
  );
