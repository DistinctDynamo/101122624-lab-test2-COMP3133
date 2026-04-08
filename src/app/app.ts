import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterList } from './character-list/character-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CharacterList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('101122624-lab-test2-COMP3133');
}
