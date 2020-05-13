import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


const Editor = props => {
    const [text, setText] = useState('How are you feeling today?')
    return(
        <ReactQuill theme='snow' value={text} onChange={setText}/>
    )
}

export default Editor