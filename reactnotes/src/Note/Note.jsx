import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
	
	constructor(pros) {
        super(pros);
        this.noteContent=pros.noteContent;
        this.noteId=pros.noteId;
    }
    
    render () {
        
	return (
        <div className="Note">
        <li>{this.noteId}-{this.noteContent}</li>
    </div>
    )
    }
}
    export default Note;
