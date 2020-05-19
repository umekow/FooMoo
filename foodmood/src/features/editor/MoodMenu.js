import React from 'react'; 

export default function MoodMenu(props){

    return(
        <div className="MoodMenu">
            <div className='currentMood'>
                <img src={props.img} alt={props.mood}/>
            </div>
            <div className='arrow'>
                
            </div>
        </div>
    )
}


function MoodMenuItem(props){
    return(
        <div className='moodMenuItem' 
            onClick={() => props.updateMood}>
            <img className={moodImg} src={props.img} alt={props.mood}/>
            <p className='moodLabel'>{props.mood}</p>
        </div>
    )
}