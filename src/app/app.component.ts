
import { Component } from '@angular/core';
import { NoteComponent } from './note/note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'notebook';
}



