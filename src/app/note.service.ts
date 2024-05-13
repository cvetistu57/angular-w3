import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    
    notes: Note[] = [];
    notesSelected = new Subject<number>();
  
    getNotes() : Note[] {
      return this.notes;
    }
  
    addNote(note: Note): void {
      this.notes.push(note);
    }
  
    editNote( newnote: Note): void {
      const index = this.notes.findIndex(note => note.id === newnote.id);
      if (index !== -1) {
        this.notes[index] = {...newnote};
      }
    }
  
    deleteNote(id: number ) : void{
      const index = this.notes.findIndex(note => note.id === id);
      this.notes.splice(index, 1);
    }
  }