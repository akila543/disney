import React,{ Component } from 'react';

//importing Material ui components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

//importing reusable components
import ShowCards from './showCards.jsx'
import CardComponent from './cardComponent.jsx'

module.exports = (props) => (
  <div style={props.dropableStyle}
      onDragOver={(e)=>props.dragEvent(e)}
      onDrop={(e)=>props.dropEvent(e, "complete", props.segmentName)}>

      <CardComponent cardStyle={styles.cardStyle} typoStyle={styles.typoStyle} data={props.date} />

      <br/>
      {
        props.data.map((t,index) =>
          (
            <ShowCards data={t} key={index} dragStartEvent={props.dragStartEvent} draggableStyle={props.draggableStyle} cardStyle={props.cardStyle} titleStyle={props.titleStyle}/>
          )
        )
      }
  </div>
)

const styles = {
  cardStyle:{
    backgroundColor:'#091528',
    borderRadius:0
  },
  typoStyle:{
    color:'white',
    textAlign:'center',
    padding:10
  }
}
