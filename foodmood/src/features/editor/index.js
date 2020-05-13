import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const Editor = props => {
    const [header, setHeader] = useState('Entry Title')
    const [text, setText] = useState('How are you feeling today?')
    return(
        <div className='editorContainer'>
            {/* header for journal entry  */}
            <div className='entryHeader'>
                <input style={{width: '780px', height: '50px', margin:'0',  border: 'none'}} type='text' placeholder={header}/>
            </div>
            {/*text editor */}
            <ReactQuill
                style={{
                    width:'800px',
                    height: '400px', 
                    margin: '0 auto', 
                    
                }}
                theme='snow'
                value={text}
                onChange={setText}>
            </ReactQuill>
        </div>
        
    )
}

export default Editor