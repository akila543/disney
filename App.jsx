import React, { Component } from 'react';

//importing material ui Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default class AppDragDropDemo extends Component {

    constructor()
    {
      super();
      this.state = {
          tasks: [
              {name:"Learn Angular",category:"wip", bgcolor: "yellow"},
              {name:"React", category:"wip", bgcolor:"pink"},
              {name:"Vue", category:"complete", bgcolor:"skyblue"}
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

    render() {
        var tasks = {
            wip: [],
            complete: []
        }

        this.state.tasks.forEach ((t) => {
            tasks[t.category].push(
                <div key={t.name}
                    onDragStart = {(e) => this.onDragStart(e, t.name)}
                    draggable
                    style={styles.draggable}
                    style = {{backgroundColor: t.bgcolor}}
                >
                    {t.name}
                </div>
            );
        });

        return (
          <div>

            <div style={styles.containerDrag}>

                <h2 style={styles.header}>DRAG & DROP DEMO</h2>
                <div style={styles.wip}
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>{this.onDrop(e, "wip")}}>
                    <span style={styles.taskHeader}>WIP</span>
                    {tasks.wip}
                </div>
                
                <div style={styles.droppable}
                    onDragOver={(e)=>this.onDragOver(e)}
                    onDrop={(e)=>this.onDrop(e, "complete")}>
                     <span style={styles.taskHeader}>COMPLETED</span>
                     {tasks.complete}
                </div>
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
    width:'150px',
    height: '100vh',
    left: '0',
    top: '10',
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
    width: '150px',
    height: '100vh',
    right: 0,
    top: 10,
    backgroundColor: '#9E9E9E',
    borderLeft: '1px dotted',
  },
  draggable: {
    width: '100px',
    height: '100px',
    backgroundColor: 'yellow',
    margin: '5px auto',
    lineHeight: '5em',
  }

}
