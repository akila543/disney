import React, {Component} from 'react';


//importing Reusable components
import AppBarComponent from './../components/appBar.jsx';

//importing Material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


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
        time:['-8:00 PM','-8:30 PM','-9:00 PM','-9:30 PM','-10:0 PM','-10:3 PM0','-11:0 PM0'],
        date1:[],
        date2:[],
        date3:[],
        date4:[],
        date5:[]
    }
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

     console.log(segment);

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

  renderTimeSlot()
  {
    return(
      this.state.time.map((time,key)=> (<div key={key} style={styles.timeSolts}>{time}</div>))
    );
  }



  render()
  {

    console.log(this.state.date1);

    var tasks = { wip: [],complete: []}

    this.state.tasks.forEach ((t) => {
        tasks[t.category].push(
          <div>
            <div key={t.name}
                onDragStart = {(e) => this.onDragStart(e, t.name)}
                draggable
                style={styles.draggable}>
                  <Card style={styles.card}>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h1" style={styles.title}>
                      {t.name}
                    </Typography>
                    <Typography component="p" style={{color:'#0ebaa6'}}>
                      {t.time}
                    </Typography>
                  </CardContent>
                </Card>
            </div>
          </div>
        );
    });

    return(
      <div>

        {/* Appbar component */}
        <AppBarComponent title={'ABC 2017/2018 Schedule'} color={'#2c3331'}/>
        <br/>
        {/* Progrmas */}
        <div style={styles.wip} onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "wip")}}>
            <Card style={{backgroundColor:'#76827f'}}>
              <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:5,fontSize:20}}>
                Series
              </Typography>
            </Card>
            {tasks.wip}
        </div>

        {/* Time Sheet */}
        <div style={styles.calendar}>
            <Card style={{backgroundColor:'#76827f'}}>
              <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:5,fontSize:20}}>
                June 2018
              </Typography>
            </Card>

            {/* Time Slots */}
            <div style={styles.timeSlotDiv}>
              <div style={{marginTop:83,zIndex:1}}>
                {this.renderTimeSlot()}
              </div>
            </div>

            {/* Date 1 Slot */}
            <div style={styles.dateSlotDiv} id="date01" ref="date01">
              <div style={styles.droppable}
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete", "date01")}>

                  <Card style={{backgroundColor:'#091528'}}>
                    <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:10}}>
                      01
                    </Typography>
                  </Card>
                  <br/>
                  {
                    this.state.date1.map((t,index)=>{
                      console.log(t.name);
                      return(
                        <div key={index}>
                          <div
                              onDragStart = {(e) => this.onDragStart(e, t.name)}
                              draggable
                              style={styles.draggable}>
                                <Card style={styles.card}>
                                <CardContent>
                                  <Typography gutterBottom variant="headline" component="h1" style={styles.title}>
                                    {t.name}
                                  </Typography>
                                  <Typography component="p" style={{color:'#0ebaa6'}}>
                                    Duration {t.time}
                                  </Typography>
                                </CardContent>
                              </Card>
                          </div>
                        </div>
                      );
                    })
                  }
              </div>
            </div>

            {/* Date 2 Slot */}
            <div style={styles.dateSlotDiv} id="date02" ref="date02">
              <div style={styles.droppable}
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete", "date02")}>

                  <Card style={{backgroundColor:'#091528'}}>
                    <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:10}}>
                      02
                    </Typography>
                  </Card>
                  <br/>
                  {this.state.date2.map((t)=>(
                    <div>
                      <div key={t.name}
                          onDragStart = {(e) => this.onDragStart(e, t.name)}
                          draggable
                          style={styles.draggable}>
                            <Card style={styles.card}>
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h1" style={styles.title}>
                                {t.name}
                              </Typography>
                              <Typography component="p" style={{color:'#0ebaa6'}}>
                                Duration {t.time}
                              </Typography>
                            </CardContent>
                          </Card>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Date 3 Slot */}
            <div style={styles.dateSlotDiv} id="date03" ref="date03">
              <div style={styles.droppable}
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete", "date03")}>

                  <Card style={{backgroundColor:'#091528'}}>
                    <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:10}}>
                      03
                    </Typography>
                  </Card>
                  <br/>
                  {this.state.date3.map((t)=>(
                    <div>
                      <div key={t.name}
                          onDragStart = {(e) => this.onDragStart(e, t.name)}
                          draggable
                          style={styles.draggable}>
                            <Card style={styles.card}>
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h1" style={styles.title}>
                                {t.name}
                              </Typography>
                              <Typography component="p" style={{color:'#0ebaa6'}}>
                                Duration {t.time}
                              </Typography>
                            </CardContent>
                          </Card>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Date 4 Slot */}
            <div style={styles.dateSlotDiv} id="date04" ref="date04">
              <div style={styles.droppable}
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete", "date04")}>

                  <Card style={{backgroundColor:'#091528'}}>
                    <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:10}}>
                      04
                    </Typography>
                  </Card>
                  <br/>
                  {this.state.date4.map((t)=>(
                    <div>
                      <div key={t.name}
                          onDragStart = {(e) => this.onDragStart(e, t.name)}
                          draggable
                          style={styles.draggable}>
                            <Card style={styles.card}>
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h1" style={styles.title}>
                                {t.name}
                              </Typography>
                              <Typography component="p" style={{color:'#0ebaa6'}}>
                                Duration {t.time}
                              </Typography>
                            </CardContent>
                          </Card>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Date 5 Slot */}
            <div style={styles.dateSlotDiv} id="date05" ref="date05">
              <div style={styles.droppable}
                  onDragOver={(e)=>this.onDragOver(e)}
                  onDrop={(e)=>this.onDrop(e, "complete", "date05")}>

                  <Card style={{backgroundColor:'#091528'}}>
                    <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:10}}>
                      05
                    </Typography>
                  </Card>
                  <br/>
                  {this.state.date5.map((t)=>(
                    <div>
                      <div key={t.name}
                          onDragStart = {(e) => this.onDragStart(e, t.name)}
                          draggable
                          style={styles.draggable}>
                            <Card style={styles.card}>
                            <CardContent>
                              <Typography gutterBottom variant="headline" component="h1" style={styles.title}>
                                {t.name}
                              </Typography>
                              <Typography component="p" style={{color:'#0ebaa6'}}>
                                Duration {t.time}
                              </Typography>
                            </CardContent>
                          </Card>
                      </div>
                    </div>
                  ))}
              </div>
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
    width:'180px',
    float:'left'
  },
  timeSlotDiv:{
    width:100,
    float:'left',
    zIndex:1
  },
  calendar:{
    width:window.innerWidth - 254,
    height:'100vh',
    backgroundColor:'#474a4f',
    float:'left',
    marginLeft:20
  },
  header: {
    display: 'inlineBlock',
    margin: 0,
    padding: 0,
    backgroundColor: '#E0E0E0',
    width:'100%'
  },
  containerDrag: {
    textAlign: 'center'
  },
  wip: {
    width:'200px',
    height: '100vh',
    backgroundColor: '#474a4f',
    float:'left',
  },
  taskHeader:{
    display: 'inlineBlock',
    backgroundColor: 'skyblue',
    width:'100%',
  },
  droppable: {
    height: '93vh',
    backgroundColor: '#9E9E9E',
  },
  draggable: {
    margin: '10px',
  },
  media:{
    width:'100%',
    paddingTop:'56.25%'
  }

}
