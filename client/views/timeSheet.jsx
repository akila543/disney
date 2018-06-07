import React,{Component} from 'react';

//importing material ui Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



export default class TimeSheet extends Component
{

  constructor()
  {
    super();
    this.state = {
        tasks: [
            {name:"Dancing Junior",category:"wip", bgcolor: "yellow",time:'17:00:00-18:00:00',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlDKwyYYKZgw6YBECMLp9Xzqth8Yg-s4yqZiasoKCL_FgrhPua'},
            {name:"Fuller House", category:"wip", bgcolor:"pink",time:'18:00:00-19:00:00',img:'https://www.whats-on-netflix.com/wp-content/uploads/2017/06/fuller_house.jpg'},
            {name:"Dancing With Stars", category:"complete", bgcolor:"skyblue",time:'14:00:00-15:00:00',img:'https://akns-images.eonline.com/eol_images/Entire_Site/201594/rs_1024x674-151004131010-1024-bindi-irwin-derek-hough-dancing-with-the-stars-092815.jpg?fit=inside|900:auto&output-quality=90'}
          ]
    }
  }

  onDragStart(ev, id){
      console.log('dragstart:',id);
      ev.dataTransfer.setData("id", id);
  }

  onDragOver(ev){
      ev.preventDefault();
  }

  onDrop(ev, cat){
     let id = ev.dataTransfer.getData("id");

     let tasks = this.state.tasks.filter((task) => {
         if (task.name == id) {
             task.category = cat;
         }
         return task;
     });

     this.setState({tasks:tasks});
  }

  render()
  {

    var tasks = {
            wip: [],
            complete: []
        }

    this.state.tasks.forEach ((t) => {
        tasks[t.category].push(
          <div>
            <div key={t.name}
                onDragStart = {(e) => this.onDragStart(e, t.name)}
                draggable
                style={styles.draggable}
                style = {{backgroundColor: t.bgcolor}} >
                  <Card >
                  <CardMedia image={t.img} style={styles.media}/>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {t.name}
                    </Typography>
                    <Typography component="p">
                      {t.time}
                    </Typography>
                  </CardContent>
                </Card>
            </div>
            <br/>
          </div>
        );
    });

    return(
      <div>

        <AppBar position="static" style={{position:'absolute',top:10}}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            ABC 2017/2018 Schedule
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>

        <div style={styles.wip} onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=>{this.onDrop(e, "wip")}}>
            <Card style={{backgroundColor:'#091528'}}>
              <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:15}}>
                Series
              </Typography>
            </Card>
            <br/>
            {tasks.wip}
        </div>

        <div style={styles.droppable}
            onDragOver={(e)=>this.onDragOver(e)}
            onDrop={(e)=>this.onDrop(e, "complete")}>

            <Card style={{backgroundColor:'#091528'}}>
              <Typography gutterBottom variant="headline" component="h2" style={{color:'white',textAlign:'center',padding:15}}>
                Schedule
              </Typography>
            </Card>
            <br/>

             {tasks.complete}
        </div>




      </div>
    );
  }
}

const styles = {
  App: {
    textAlign: 'center',
    width: '95%',
    margin: '15px auto'
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
    position: 'absolute',
    width:'350px',
    height: '100vh',
    left: 10,
    top: 90,
    backgroundColor: '#EEEEEE',
    borderRight: '1px dotted',
  },
  taskHeader:{
    display: 'inlineBlock',
    backgroundColor: 'skyblue',
    width:'100%',
  },
  droppable: {
    position: 'absolute',
    width: '350px',
    height: '100vh',
    right: 10,
    top: 90,
    backgroundColor: '#9E9E9E',
    borderLeft: '1px dotted',
  },
  draggable: {
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    margin: '5px auto',
    lineHeight: '5em',
  },
  media:{
    width:'100%',
    paddingTop:'56.25%'
  }

}
