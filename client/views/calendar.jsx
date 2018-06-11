import React, {Component} from 'react';

//importing Reusable components
import AppBarComponent from './../components/appBar.jsx';
import Segment from './../components/segment.jsx';
import TimeSlotSegment from './../components/timeSlotSegment.jsx';
import CardComponent from './../components/cardComponent.jsx';
import ShowCards from './../components/showCards.jsx';

export default class Calendar extends Component
{

  constructor()
  {
    super();
    this.state = {
        tasks: [
            {name:"Dancing Junior",category:"wip", bgcolor: "yellow",time:'1 Hr'},
            {name:"Fuller House", category:"wip", bgcolor:"pink",time:'1 Hr'},
            {name:"Dancing Stars", category:"wip", bgcolor:"skyblue",time:'1 Hr'},
            {name:"Doc McStuffins", category:"wip", bgcolor:"skyblue",time:'1 Hr'},
            {name:"Goof Troop", category:"wip", bgcolor:"skyblue",time:'1 Hr'},
          ],
        time:['- 8:00 PM','- 9:00 PM','- 10:00 PM','- 11:00 PM',,'- 12:00 PM'],
        date1:[],
        date2:[],
        date3:[],
        date4:[],
        date5:[]
    }
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);

  }

  onDragStart(ev, id){
      console.log('dragstart:',id);
      ev.dataTransfer.setData("id", id);
  }

  onDragOver(ev){
      ev.preventDefault();
  }

  onDrop(ev, cat, segment){
     let id = ev.dataTransfer.getData("id");

     if(segment == 'date01')
     {
       var arr = this.state.date1;
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
             return task;
           }
       });
       var newarr = arr.concat(tasks);
       this.setState({date1:newarr});
     }
     else if (segment == 'date02') {
       var arr = this.state.date2;
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
             return task;
           }
       });
       var newarr = arr.concat(tasks);
       this.setState({date2:newarr});
     }
     else if (segment == 'date03') {
       var arr = this.state.date3;
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
             return task;
           }
       });
       var newarr = arr.concat(tasks);
       this.setState({date3:newarr});
     }
     else if (segment == 'date04') {
       var arr = this.state.date4;
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
             return task;
           }
       });
       var newarr = arr.concat(tasks);
       this.setState({date4:newarr});
     }
     else if (segment == 'date05') {
       var arr = this.state.date5;
       let tasks = this.state.tasks.filter((task) => {
           if (task.name == id) {
             return task;
           }
       });
       var newarr = arr.concat(tasks);
       this.setState({date5:newarr});
     }
  }

  renderShowCards()
  {
    return(
      this.state.tasks.map((t,index) => (
        <ShowCards key={index} data={t} dragStartEvent={this.onDragStart} titleStyle={styles.title} draggableStyle={styles.draggable} cardStyle={styles.card} />
      ))
    );
  }

  render()
  {
    return(
      <div>

        {/* Appbar component */}
        <AppBarComponent title={'ABC 2017/2018 Schedule'} color={'#2c3331'}/>
        <br/>

        {/* Shows */}
        <div style={styles.wip} onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "wip")}}>
            <CardComponent data={"Series"} cardStyle={styles.headerStyle} typoStyle={styles.typoStyle}/>
            {this.renderShowCards()}
        </div>

        {/* Time Sheet */}
        <div style={styles.calendar}>
          <CardComponent data={"June 2018"} cardStyle={styles.headerStyle} typoStyle={styles.typoStyle}/>

            {/* Time Slots */}
            <div style={styles.timeSlotDiv}>
              <div style={{marginTop:83}}>
                <TimeSlotSegment data={this.state.time} timeSlotStyle={styles.timeSolts}/>
              </div>
            </div>

            {/* Date 1 Slot */}
            <div style={styles.dateSlotDiv} >
              <Segment date={"01"} titleStyle={styles.title} cardStyle={styles.card} draggableStyle={styles.draggable} dropableStyle={styles.droppable} dragStartEvent={this.onDragStart} segmentName={"date01"} dropEvent={this.onDrop} dragEvent={this.onDragOver} data={this.state.date1} />
            </div>

            {/* Date 2 Slot */}
            <div style={styles.dateSlotDiv} >
              <Segment date={"02"} titleStyle={styles.title} cardStyle={styles.card} draggableStyle={styles.draggable} dropableStyle={styles.droppable} dragStartEvent={this.onDragStart} segmentName={"date02"} dropEvent={this.onDrop} dragEvent={this.onDragOver} data={this.state.date2} />
            </div>

            {/* Date 3 Slot */}
            <div style={styles.dateSlotDiv} >
              <Segment date={"03"} titleStyle={styles.title} cardStyle={styles.card} draggableStyle={styles.draggable} dropableStyle={styles.droppable} dragStartEvent={this.onDragStart} segmentName={"date03"} dropEvent={this.onDrop} dragEvent={this.onDragOver} data={this.state.date3} />
            </div>

            {/* Date 4 Slot */}
            <div style={styles.dateSlotDiv} >
              <Segment date={"04"} titleStyle={styles.title} cardStyle={styles.card} draggableStyle={styles.draggable} dropableStyle={styles.droppable} dragStartEvent={this.onDragStart} segmentName={"date04"} dropEvent={this.onDrop} dragEvent={this.onDragOver} data={this.state.date4} />
            </div>

            {/* Date 5 Slot */}
            <div style={styles.dateSlotDiv} >
              <Segment date={"05"} titleStyle={styles.title} cardStyle={styles.card} draggableStyle={styles.draggable} dropableStyle={styles.droppable} dragStartEvent={this.onDragStart} segmentName={"date05"} dropEvent={this.onDrop} dragEvent={this.onDragOver} data={this.state.date5} />
            </div>

          </div>
      </div>
    );
  }
}

const styles = {
  title: {
    fontSize:16,
    color:'white'
  },
  headerStyle:{
    backgroundColor:'#76827f'
  },
  card:{
    backgroundColor:'#606368',
    height:'100px',
  },
  timeSolts:{
    height:'100px',
    color:'white',
    padding:5
  },
  dateSlotDiv:{
    width:'189px',
    float:'left'
  },
  timeSlotDiv:{
    width:100,
    float:'left',
  },
  calendar:{
    width:window.innerWidth - 254,
    height:'100vh',
    backgroundColor:'#474a4f',
    float:'left',
    marginLeft:20
  },
  wip: {
    width:'200px',
    height: '100vh',
    backgroundColor: '#474a4f',
    float:'left',
  },
  droppable: {
    height: '93vh',
    backgroundColor: '#9E9E9E',
  },
  draggable: {
    margin: '10px',
  },
  typoStyle:{
    color:'white',
    textAlign:'center',
    padding:5,
    fontSize:20
  }

}
