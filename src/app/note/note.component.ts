import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../note.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note: Note = {id: 0,  title: '', content: '' };
  selectedNoteIndex: number | null = null;
  editedNoteIndex: number | null = null;
  showActions: boolean[] = []; 
  notes: Note[] = [];

  isNoteSaved = false;

  constructor(private noteService: NoteService) { }

  saveNote() {
    if (this.editedNoteIndex !== null) {
      this.notes[this.editedNoteIndex] = { ...this.note };
      this.note = { id : 0 , title: '', content: '' };
      this.editedNoteIndex = null;
    } else {

      this.notes.push({ ...this.note });

      this.note = { id : 0 , title: '', content: '' };
    }
  }

  onNoteUpdate(note: Note) {
    this.note = {
      id: note.id,
      title: note.title,
      content: note.content
    };
  }

  toggleNoteActions(index: number) {
    this.showActions[index] = !this.showActions[index];
    for (let i = 0; i < this.showActions.length; i++) {
      if (i !== index) {
        this.showActions[i] = false;
      }
    }
    this.selectedNoteIndex = this.showActions[index] ? index : null;
  }

  editNote(note: any) {
    this.note = { ...note };
    this.editedNoteIndex = this.notes.indexOf(note); 
  }

  deleteNote(note: Note) {
    this.noteService.deleteNote(note.id);
  }

  onSelect(note: Note) {
    this.selectedNoteIndex = note.id;
  }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes();
  }

}