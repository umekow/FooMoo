import React from 'react';

// icons
import down_icon from '../../images/icons/arrow.svg'

export default function MoodMenu(props) {

  return (<div className = "MoodMenu"><div className = 'currentMood'>
          <img src = {props.img} alt = { props.mood } />
            </div>
          <div className = 'arrow'>
          <img src = {down_icon} alt = 'select a mood' /></div>
        </div>)
}

function MoodMenuItem(props) {
    return(
        <div className='moodMenuItem'
    onClick = {() => props.updateMood} >
              <img className = {moodImg} src = {props.img} alt =
               {
                 props.mood
               } />
            <p className='moodLabel'>{props.mood}</p><
              /div>
    )
}