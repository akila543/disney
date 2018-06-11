import React from 'react';

module.exports = (props) => (
      props.data.map((time,index)=>{
        return(
          <div key={index} style={props.timeSlotStyle}>
            {time}
          </div>
        )
      })
  );
